
var Livenation = {

  Models:      {},
  Collections: {},
  Views:       {},
  Utils:       {},


  init: function(options) {

    Livenation.searchView = new Livenation.Views.Search();

    Livenation.paginatedCollection = new Livenation.Collections.PaginatedCollection();

    Livenation.viewPage("index");

    Livenation.router = new Livenation.Router();
    Backbone.history.start();
  },


  viewPage: function (type, term) {
    $('.loading-img').removeClass('hide');
    this.paginatedCollection.fetch(
        type,
        term
    );
  }
};