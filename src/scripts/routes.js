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
      'filter/type/:type':'urlFilterType',
      'filter/product/:product':'urlFilterProduct',
      'filter/style/:style':'urlFilterStyle',
      'filter/review/:review':'urlFilterReview'
    },
    urlFilterType: function(type) {
      myMatrix.filterType = type;
      myMatrix.trigger('change:filterType');
    },
    urlFilterProduct: function(product) {
      myMatrix.filterProduct = product;
      myMatrix.trigger('change:filterProduct');
    },
    urlFilterStyle: function(style) {
      myMatrix.filterStyle = style;
      myMatrix.trigger('change:filterStyle');
    },
    urlFilterReview: function(review) {
      myMatrix.filterReview = review;
      myMatrix.trigger('change:filterReview');
    }
  });
