Livenation.Views.Search = Backbone.View.extend({


  tagName: 'div',

  className: 'search-field',

  initialize: function () {
    // this.render();
  },

  render: function () {

    this.$el.html(JST['search']());

    $('#search-panel').prepend(this.$el);

    return this;
  }

});


Livenation.Views.EventItem = Backbone.View.extend({

  tagName: 'li',

  className: 'event',

    events: {
      'click' : 'viewEvent'
    },


  initialize: function () {
    this.thumbURL = this.options.val.headliner_thumb;
    this.displayName = this.options.val.display_name;
    this.venueName = this.options.val.venue.name;
    this.areaName = this.options.val.venue.area_name;
    this.date = this.options.val.start_time.split(' ')[0];
  },

  render: function () {

    this.$el.html(JST['eventItem']({
      thumbURL: this.thumbURL,
      displayName: this.displayName,
      venueName: this.venueName,
      areaName: this.areaName,
      date: this.date
    }));

    return this;
  },

  viewEvent: function () {

    var expandedEventItem = new Livenation.Views.ExpandedEventItem({
      eventID: this.options.val.id
    });
  }

});


Livenation.Views.ExpandedEventItem = Backbone.View.extend({

  tagName: 'div',

  className: 'expanded-event',

  events: {
    'click': 'close'
  },

  initialize: function () {
    var self = this,
        eventID = this.options.eventID,
        data = new Livenation.Models.Data();

    data.fetchEvent(
      eventID,
      function(obj) { self.buildEvent(obj); },
      function() { self.onConfigError(); }
    );








  },

  render: function () {
    var self = this;

    this.html =  this.$el.html(JST['expandedEventItem']({
      imageURL: this.thumbURL,
      displayName: this.displayName,
      headlinerName: this.headlinerName,
      venueName: this.venueName,
      startTime: this.startTime,
      eventURL: this.eventURL
    }));

    $('body').append(this.html);
    return this;
  },

  buildEvent: function (obj) {
    var data = obj;
    this.thumbURL = data.headliner_thumb;
    this.displayName = data.display_name;
    this.headlinerName = data.headliner_name;
    this.venueName = data.venue.name;
    this.startTime = data.local_start_time;
    this.eventURL = data.event_url;
    this.render();
  },

  onConfigError: function () {
    alert("config error");
  },

  close: function () {
    $('.expanded-event').remove();
  }


});

