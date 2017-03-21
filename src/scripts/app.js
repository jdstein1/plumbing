// app.js
$(function() {
  // Handler for .ready() called.
  console.log('jQ ready!!');

  app = {
    models:{},
    views:{},
    collections:{},
    routers:{},
    init: function() {
      myMatrix = new app.views.Suppliers(suppliers);
      myRouter = new app.routers.Router();
      Backbone.history.start();
    }
  }

  app.routers.Router = Backbone.Router.extend({
    routes:{
      'filter/:type':'urlFilterType',
      'filter/:product':'urlFilterProduct'
    },
    urlFilterType: function(type) {
      myMatrix.filterType = type;
      myMatrix.trigger('change:filterType');
    },
    urlFilterProduct: function(product) {
      myMatrix.filterProduct = product;
      myMatrix.trigger('change:filterProduct');
    }
  });

  app = app || {};
  app.models.Vendor = Backbone.Model.extend({
    defaults:{
        'href':'',
        'products':[],
        'styles':[],
        'review':'',
        'name':''
      },
      initialize: function() {
        var self = this;
        if (this.get('products').length > 1) {
          self.set('type','multi');
        } else {
          self.set('type','single');
        }
      }
  });

  app.collections.Suppliers = Backbone.Collection.extend({
    model: app.models.Vendor,
    comparator: function(vendor) {
      return vendor.get('products');
    }
  });

  app.views.Vendor = Backbone.View.extend({
    tagName:'li',
    attributes: function() {
      return {
        class: 'vendor ' + this.model.get('type')
      };
    },
    events: {
      'click .header': 'showDetails'
    },
    template: _.template($('#vendor-template').html()),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    showDetails: function(e) {
      $(e.target).toggleClass('active');
      $(e.target).siblings('.details').slideToggle('fast');
    }
  });

  app.views.Suppliers = Backbone.View.extend({
    el: '#wrapper',
      initialize: function(data) {
        this.collection = new app.collections.Suppliers(data);
        this.render();
        // this.$el.find('#filtering').append(this.createTypeFilter());
        this.$el.find('#filtering').append(this.createProductFilter());
        this.on('change:searchFilter', this.filterBySearch, this);
        // this.on('change:filterType', this.filterByType, this);
        this.on('change:filterProduct', this.filterByProduct, this);
        this.collection.on('reset', this.render, this);
      },
      events: {
        'keyup #searchBox':'searchFilter',
        'click a.filter.type':'setFilterType',
        'click a.filter.product':'setFilterProduct'
      },
      render: function() {
        var self = this;
        $('#suppliers').empty();
        _.each(this.collection.models, function(vendor) {
          self.renderVendor(vendor);
        }, this);
      },
      renderVendor: function(vendor) {
        var newVendor = new app.views.Vendor({
          model: vendor
        });
        $('#suppliers').append(newVendor.render().el);
      },
      getTypes: function() {
        return _.uniq(this.collection.pluck('type'))
      },
      createTypeFilter: function() {
        var filters = '<h5>filter by type</h5><a class="btn btn-default filter type" role="button" href="#all">all</a>';
        _.each(this.getTypes(), function(item) {
          filters += '<a class="btn btn-default filter type" role="button" href="#'+item+'">'+item+'</a>';
        })
        return filters;
      },
      getProducts: function() {
        return _.uniq(this.collection.pluck('products'))
      },
      createProductFilter: function() {
        // console.log('this.getProducts(): ', this.getProducts());
        var allItems = [];
        var filters = '<h5>filter by product</h5><a class="btn btn-default filter product" role="button" href="#all">all</a>';
        _.each(this.getProducts(), function(items) {
          // console.log('items: ', items);
          _.each(items, function(item) {
            allItems.push(item);
          })
        })
        // console.log('allItems: ', allItems);
        var uniqueItems = _.uniq(allItems);
        // console.log('uniqueItems: ', uniqueItems);
        _.each(uniqueItems, function(item) {
          filters += '<a class="btn btn-default filter product" role="button" href="#'+item+'">'+item+'</a>';
        })
        return filters;
      },
      getStyles: function() {
        return _.uniq(this.collection.pluck('styles'))
      },
      getReview: function() {
        return _.uniq(this.collection.pluck('review'))
      },
      searchFilter: function(e) {
        this.searchFilter = e.target.value;
        this.trigger('change:searchFilter');
      },
      filterBySearch: function() {
        console.log('START this.collection.length: ', this.collection.length);
        this.collection.reset(suppliers, {silent:true});
        var filterString = this.searchFilter,
          filtered = _.filter(this.collection.models, function(item) {
            // console.log('item: ', item.attributes.products);
            // check "name" node (string) of item for index of searched string.
            return item.get('name').toLowerCase().indexOf(filterString.toLowerCase()) !== -1;
            // console.log('item.products: ', item.products);
            // how do I check an array for the string value?
            // this method only matches full search term:
            // return item.get('products').indexOf(filterString.toLowerCase()) !== -1;
            // probably need to iterate over products array to get better result.
            // return $.inArray(filterString.toLowerCase(), item.get('products'));
          });
        this.collection.reset(filtered);
        console.log('END this.collection.length: ', this.collection.length);
      },
      setFilterType: function(e) {
        e.preventDefault();
        this.filterType = e.currentTarget.innerHTML;
        this.trigger('change:filterType');
      },
      filterByType: function() {
        console.log('this.filterType: ', this.filterType);
        if (this.filterType === 'all') {
          this.collection.reset(suppliers);
          myRouter.navigate('filter/all');
        } else {
          this.collection.reset(suppliers, {silent:true});
          var filterType = this.filterType,
            filtered = _.filter(this.collection.models, function(item) {
              return item.get('type') === filterType;
            });
          this.collection.reset(filtered);
          myRouter.navigate('filter/'+filterType);
        }
        console.log('this.collection: ', this.collection.length);
      },
      setFilterProduct: function(e) {
        e.preventDefault();
        this.filterProduct = e.currentTarget.innerHTML;
        this.trigger('change:filterProduct');
      },
      filterByProduct: function() {
        console.log('this.filterProduct: ', this.filterProduct);
        if (this.filterProduct === 'all') {
          this.collection.reset(suppliers);
          myRouter.navigate('filter/all');
        } else {
          this.collection.reset(suppliers, {silent:true});
          var filterProduct = this.filterProduct,
            filtered = _.filter(this.collection.models, function(item) {
              return item.get('products').includes(filterProduct);
            });
          this.collection.reset(filtered);
          myRouter.navigate('filter/'+filterProduct);
        }
        console.log('this.collection: ', this.collection.length);
      }
  });

  app.init();

});
