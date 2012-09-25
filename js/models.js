Livenation.Models.Data = Backbone.Model.extend({

  urlRoot: '/events',

  initialize: function () {

  },


  //this will be in the events collection
  fetchEvents: function (pageNumber, callback, errorCallback) {
    var _url = 'http://lnl-p.com/api/v1/events/?page='+pageNumber;

    // $.ajax({url: _url, type: 'GET', dataType: 'json'})
    //   .done(function(obj, xhr){
    //     callback(obj);
    //   }).fail(function(){
    //     errorCallback();
    //   });

    var params = [];

    $.ajax({
      type: 'get',
      url: '_url',
      data: params,

      success: function(){
        alert("DOG");
      },
      complete: function(httpObj, textStatus){
        alert("cat")
      }
    });

  },


});
