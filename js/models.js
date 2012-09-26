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
      url: _url,
      data: params,
      dataType: 'jsonp',

      success: function(obj){
        callback(obj);
      },
      error: function(xhr, textStatus){
        alert("cat")
      }
    });


    // $.getJSON(_url,
    //         function(data){
    //           $.each(data.items, function(i,item){
    //             // $("<img/>").attr("src", item.media.m).appendTo("#images");
    //             // if ( i == 3 ) return false;
    //             alert("DOG");
    //           });
    //         });


  },


});
