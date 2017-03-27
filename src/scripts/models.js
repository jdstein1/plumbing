  app = app || {};

  app.models.Vendor = Backbone.Model.extend({
    defaults:{
        'href':'',
        'products':[],
        'styles':[],
        'notes':[],
        'examples':[],
        'review':'',
        'name':''
      },
      initialize: function() {
        var self = this;
        if (this.get('products').length > 1) {
          console.log("products MULTI");
          self.set('type','multi');
        } else if (this.get('products').length < 1) {
          console.log("products ZERO");
          self.set('type','zero');
        } else {
          console.log("products SINGLE");
          self.set('type','single');
        }
        if (this.get('notes').length > 0) {
          console.log("notes EXISTS");
        }
        if (this.get('examples').length > 0) {
          console.log("examples EXISTS");
        }
      }
  });

  app.collections.Suppliers = Backbone.Collection.extend({
    model: app.models.Vendor,
    comparator: function(vendor) {
      var sortedProducts = _.sortBy(vendor.get('products'), 'name');
      return vendor.get(sortedProducts);
    }
  });
