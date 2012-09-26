window.JST = {};

window.JST['search'] = _.template(
    "<input class='search-input' type='text' autocomplete='off' spellcheck='false' dir='ltr' placeholder='Search Events'/>"
);

window.JST['eventItem'] = _.template(
    "<img src='<%= thumbURL %>'/>\
     <div href='#' class='display-name'><%= displayName %></div>\
     <div class='location'>\
       <div class='venue-name'><%= venueName %></div>\
       <div class='area-name'><%= areaName %></div>\
     </div>\
     <div class='date'><%= date %></div>"
);



// displayName: this.displayName,
// venueName: this.venueName,
// areaName: this.areaName,
// date: this.date