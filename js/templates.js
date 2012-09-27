window.JST = {};

window.JST['search'] = _.template(
    "<input class='search-input' type='text' autocomplete='off' spellcheck='false' dir='ltr' placeholder='search events...'/>\
    <div class='index-button'>Index</div>"
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


window.JST['expandedEventItem'] = _.template(
    "<div class='darkbox' style='height: <%= blackboxHeight %>px'>\
      <div class='lightbox'>\
        <img src='<%= imageURL %>'/>\
        <div><%= displayName %></div>\
        <div><%= headlinerName %></div>\
        <div><%= venueName %></div>\
        <div><%= startTime %></div>\
      </div>\
    </div>"
);


window.JST['paginated_view'] = _.template(
  "<div class='selectors'>\
    <% if(prev) { %>\
      <a href='#' class='prev'>previous</a>\
    <% } else { %>\
      <span>previous</span>\
    <% } %>\
    <% if(next) { %>\
      <a href='#' class='next'>next</a>\
    <% } else { %>\
      <span>next</span>\
    <% } %>\
  </div>\
  <div class='page-num'>\
    <%= page %></span>\
  </div>"
);