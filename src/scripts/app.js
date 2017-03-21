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
      matrix = new app.views.Suppliers(suppliers);
    }

  }

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
    tagname:'li',
    attributes: function() {
      return {
        class: 'vendor' + this.model.get('type')
      };
    },
    events: {
      'click .vendor-header': 'showDetails'
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
        this.on('change:searchFilter', this.filterBySearch, this);
        this.collection.on('reset', this.render, this);
      },
      events: {
        'keyup #searchBox':'searchFilter'
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
      searchFilter: function(e) {
        this.searchFilter = e.target.value;
        this.trigger('change:searchFilter');
      },
      filterBySearch: function() {
        console.log('this: ', this);
        this.collection.reset(suppliers, {silent:true});
        var filterString = this.searchFilter,
          filtered = _.filter(this.collection.models, function(item) {
            console.log('item: ', item.attributes.products);
            // check "name" node (string) of item for index of searched string.
            return item.get('name').toLowerCase().indexOf(filterString.toLowerCase()) !== -1;
            // console.log('item.products: ', item.products);
            // how do I check an array for the string value?
            // this method only matches full search term:
            // return item.get('products').indexOf(filterString.toLowerCase()) !== -1;
            // probably need to iterate over products array to get better result.
          });
        this.collection.reset(filtered);
      }
  });

  app.init();

});
