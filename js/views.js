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
    // this.render();
  },

  render: function () {

    this.$el.html(JST['event']());


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

