
var Livenation = {

  Models:      {},
  Collections: {},
  Views:       {},
  Utils:       {},


  init: function(options) {


    var searchView = new Livenation.Views.Search({
        // collection: Demo.items,
    });

    var data = new Livenation.Models.Data();

    data.fetchEvents(
      "1",
      function(obj) { Livenation.buildEventList(obj); },
      function() { Livenation.onConfigError(); }
    );

    searchView.render();

    Livenation.router = new Livenation.Router();
    Backbone.history.start();
  },


  buildEventList: function (obj) {
    var data = obj.data,
        url = obj.url,
        status = obj.status,
        list = this.$('#event-list ul'),
        self = this;

    if (status === 'not found') {
      this.onMissingArtist();
      return;
    }

    $.each(data, function (key, val) {

      var eventItemView = new Livenation.Views.EventItem({
      });

      list.append(eventItemView.rendor().el);
    });

  },

  onConfigError: function (obj) {
    alert("config error");
  }



  // MAX_WHATEVER: 6

};