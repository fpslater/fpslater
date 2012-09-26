Livenation.Models.Data = Backbone.Model.extend({

  urlRoot: '/events',

  initialize: function () {

  },


  //this will be in the events collection
  fetchEvents: function (pageNumber, callback, errorCallback) {
    var _url = 'http://lnl-p.com/api/v1/events/?page='+pageNumber;


    var params = [];

    $.ajax({
      type: 'get',
      url: _url,
      data: params,
      dataType: 'jsonp',

      success: function(obj){
        callback(obj);
      },
      error: function(xhr, textStatus){
        errorCallback();
      }
    });

  },


});
