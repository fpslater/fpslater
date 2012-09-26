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

});


Livenation.Views.ExpandedEventItem = Backbone.View.extend({

  tagName: 'div',

  className: 'expanded-event',

  initialize: function () {

  },

  render: function () {

    return this;
  }

});

