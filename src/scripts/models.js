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
      var sortedProducts = _.sortBy(vendor.get('products'), 'name');
      return vendor.get(sortedProducts);
    }
  });
