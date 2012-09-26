Livenation.Models.Data = Backbone.Model.extend({

  urlRoot: '/events',

  initialize: function () {

  },


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

  fetchEvent: function (eventID, callback, errorCallback) {
    var _url = 'http://www.lnl-p.com/api/v1/events/'+eventID;


    var params = "";

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
  }


});
