
/** SEARCH VIEW **/
Livenation.Views.Search = Backbone.View.extend({

  tagName: 'div',

  className: 'search-field',

  events: {
    'keyup input': 'onInput',
    'click div' : 'onClick'
  },

  initialize: function () {
    this.render();
  },

  render: function () {

    this.$el.html(JST['search']());

    $('#search-panel').prepend(this.$el);

    return this;
  },

  onInput: function(e) {
    if (e.keyCode == 13) {
      Livenation.viewPage("search", this.$('input').val());
    }
  },

  onClick: function(e) {
    Livenation.viewPage("index");
  },
});


/** EVENT ITEM VIEW **/
Livenation.Views.EventItem = Backbone.View.extend({

  tagName: 'li',

  className: 'event',

    events: {
      'click' : 'viewEvent'
    },

  initialize: function () {

    var emptyImageURL = "http://www.urti.org/images/no-image.gif",
        thumbURL = this.options.val.headliner_hero_img_url;

    if (thumbURL != null){
       this.thumbURL = thumbURL;
    } else {
      this.thumbURL = emptyImageURL;
    }

    this.displayName = this.options.val.headliner_name;
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



/** EXPANDED ITEM VIEW **/
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
      eventURL: this.eventURL,
      blackboxHeight: this.blackboxHeight
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
    this.blackboxHeight = $('.header').height() + $('#event-list').height() + 25;
    this.render();
  },

  onConfigError: function () {
    alert("config error");
  },

  close: function () {
    this.html.remove();
  }
});


/** PAGINATED VIEW **/
Livenation.Views.PaginatedView = Backbone.View.extend({

  tagName: 'div',

  className: 'pagination',

  events: {
    'click a.prev': 'previous',
    'click a.next': 'next'
  },

  initialize: function() {
    _.bindAll(this, 'previous', 'next', 'render');
    this.collection.bind('refresh', this.render);
  },

  render: function() {
    $('.pagination').remove();

    this.$el.html(JST['paginated_view'](this.collection.pageInfo()));

    $('#event-list').prepend(this.$el);
  },

  previous: function() {
    this.collection.previousPage();
    return false;
  },

  next: function() {
    this.collection.nextPage();
    return false;
  }
});

