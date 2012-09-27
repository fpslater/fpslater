Livenation.Collections.PaginatedCollection = Backbone.Collection.extend({

  initialize: function() {
    _.bindAll(this, 'parse', 'pageInfo', 'nextPage', 'previousPage', 'renderPaginatedView');
    this.page = 1;
  },

  fetch: function(pageType, term, callback) {
    var self = this;
    this.perPage = 50;
    if (((this.pageType !== pageType) && pageType) ||
         ((this.term !== term) && term)){
      this.page = 1;
    }
    if (pageType) { this.pageType = pageType; }
    if (term) { this.term = term; }

    var self = this,
        data = new Livenation.Models.Data();

    if (pageType == "index") {
      data.indexEvents(
        this.page,
        function(obj) { self.buildEventList(obj); },
        function() { self.onConfigError(); }
      );
    } else {
      data.searchEvents(
        this.term,
        this.page,
        function(obj) { self.buildEventList(obj);},
        function() { self.onConfigError(); }
      );
    }

  },

  renderPaginatedView: function() {
    var paginatedView = new Livenation.Views.PaginatedView({
      collection: this
    });
    paginatedView.render();
   },

  parse: function(resp) {
    this.page = resp.page;
    this.perPage = resp.perPage;
    this.total = resp.total;
    return resp.models;
  },

  pageInfo: function() {
    var info = {
      total: this.total,
      page: this.page,
      perPage: this.perPage,
      prev: false,
      next: false
    };

    if (this.page > 1) {
      info.prev = this.page - 1;
    }

    if (this.total >= 50 ) {
      info.next = this.page + 1;
    }

    return info;
  },

  nextPage: function() {
    if (!this.pageInfo().next) {
       return false;
     }
    this.page = this.page + 1;
    Livenation.viewPage(this.pageType, this.term);
    return this.fetch();
  },

  previousPage: function() {
    if (!this.pageInfo().prev) {
      return false;
    }
    this.page = this.page - 1;
    Livenation.viewPage(this.pageType, this.term);
    return this.fetch();
  },

  buildEventList: function (obj) {

    $('.event').remove();

    var data = obj,
        list = $('#event-list ul'),
        self = this;

    this.total = data.length;

    $.each(data, function(key, val) {
      var eventItemView = new Livenation.Views.EventItem({
        key: key,
        val: val
      })

      list.append(eventItemView.render().el);

    });

    $('.loading-img').addClass('hide');

    this.renderPaginatedView();

  },

  onConfigError: function () {
    alert("config error");
  }

});