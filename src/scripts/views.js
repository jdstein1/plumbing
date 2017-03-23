app = app || {};

/**
 * View: Vendor
 */
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
    console.log('e.target: ', e.target);
    $(e.target).toggleClass('active');
    $(e.target).siblings('.details').slideToggle('fast');
  }

});

/**
 * View: Suppliers
 */
app.views.Suppliers = Backbone.View.extend({

  el: '#wrapper',

  initialize: function(data) {

    this.collection = new app.collections.Suppliers(data);

    this.render();

    this.$el.find('#filtering #byType').append(this.createTypeFilter());
    this.$el.find('#filtering #byProduct').append(this.createProductFilter());
    this.$el.find('#filtering #byStyles').append(this.createStyleFilter());
    this.$el.find('#filtering #byReview').append(this.createReviewFilter());

    this.on('change:searchFilter', this.filterBySearch, this);

    this.on('change:filterType', this.filterByType, this);
    this.on('change:filterProduct', this.filterByProduct, this);
    this.on('change:filterStyle', this.filterByStyle, this);
    this.on('change:filterReview', this.filterByReview, this);

    this.collection.on('reset', this.render, this);

  },

  events: {
    'keyup #searchBox':'searchFilter',
    'click a.filter.type':'setFilterType',
    'click a.filter.product':'setFilterProduct',
    'click a.filter.style':'setFilterStyle',
    'click a.filter.review':'setFilterReview'
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
    console.log('this.getTypes(): ', this.getTypes());
    var filters = '<label>filter by type</label><br /><a class="btn btn-default filter type" role="button" href="#all">all</a>';
    _.each(this.getTypes(), function(item) {
      filters += '<a class="btn btn-default filter type" role="button" href="#'+item+'">'+item+'</a>';
    })
    return filters;
  },

  getProducts: function() {
    return _.uniq(this.collection.pluck('products'))
  },

  createProductFilter: function() {
    console.log('this.getProducts(): ', this.getProducts());
    var allItems = [];
    var filters = '<label>filter by product category</label><br /><a class="btn btn-default filter product" role="button" href="#all">all</a>';
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

  createStyleFilter: function() {
    console.log('this.getStyles(): ', this.getStyles());
    var allItems = [];
    var filters = '<label>filter by styles offered</label><br /><a class="btn btn-default filter style" role="button" href="#all">all</a>';
    _.each(this.getStyles(), function(items) {
      // console.log('items: ', items);
      _.each(items, function(item) {
        allItems.push(item);
      })
    })
    // console.log('allItems: ', allItems);
    var uniqueItems = _.uniq(allItems);
    // console.log('uniqueItems: ', uniqueItems);
    _.each(uniqueItems, function(item) {
      filters += '<a class="btn btn-default filter style" role="button" href="#'+item+'">'+item+'</a>';
    })
    return filters;
  },

  getReviews: function() {
    return _.uniq(this.collection.pluck('review'))
  },

  createReviewFilter: function() {
    console.log('this.getReviews(): ', this.getReviews());
    var filters = '<label>filter by my rating</label><br /><a class="btn btn-default filter review" role="button" href="#all">all</a>';
    _.each(this.getReviews(), function(item) {
      filters += '<a class="btn btn-default filter review" role="button" href="#'+item+'">'+item+'</a>';
    })
    return filters;
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
      myRouter.navigate('');
    } else {
      this.collection.reset(suppliers, {silent:true});
      var filterType = this.filterType,
        filtered = _.filter(this.collection.models, function(item) {
          return item.get('type') === filterType;
        });
      this.collection.reset(filtered);
      myRouter.navigate('filter/type/'+filterType);
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
      myRouter.navigate('');
    } else {
      this.collection.reset(suppliers, {silent:true});
      var filterProduct = this.filterProduct,
        filtered = _.filter(this.collection.models, function(item) {
          return item.get('products').includes(filterProduct);
        });
      this.collection.reset(filtered);
      myRouter.navigate('filter/product/'+filterProduct);
    }
    console.log('this.collection: ', this.collection.length);
  },

  setFilterStyle: function(e) {
    e.preventDefault();
    this.filterStyle = e.currentTarget.innerHTML;
    this.trigger('change:filterStyle');
  },

  filterByStyle: function() {
    console.log('this.filterStyle: ', this.filterStyle);
    if (this.filterStyle === 'all') {
      this.collection.reset(suppliers);
      myRouter.navigate('');
    } else {
      this.collection.reset(suppliers, {silent:true});
      var filterStyle = this.filterStyle,
        filtered = _.filter(this.collection.models, function(item) {
          return item.get('styles').includes(filterStyle);
        });
      this.collection.reset(filtered);
      myRouter.navigate('filter/style/'+filterStyle);
    }
    console.log('this.collection: ', this.collection.length);
  },

  setFilterReview: function(e) {
    e.preventDefault();
    this.filterReview = e.currentTarget.innerHTML;
    this.trigger('change:filterReview');
  },

  filterByReview: function() {
    console.log('this.filterReview: ', this.filterReview);
    if (this.filterReview === 'all') {
      this.collection.reset(suppliers);
      myRouter.navigate('');
    } else {
      this.collection.reset(suppliers, {silent:true});
      var filterReview = this.filterReview,
        filtered = _.filter(this.collection.models, function(item) {
          return item.get('review') === filterReview;
        });
      this.collection.reset(filtered);
      myRouter.navigate('filter/review/'+filterReview);
    }
    console.log('this.collection: ', this.collection.length);
  }

});
