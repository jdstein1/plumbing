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
    template: _.template($('#vendor-template').html()),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  app.views.Suppliers = Backbone.View.extend({
    el: '#wrapper',
      initialize: function(data) {
        this.collection = new app.collections.Suppliers(data);
        this.render();
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
      }
  });

  app.init();

});
