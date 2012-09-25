NOTE: This is still a work in progress. Imcomplete. 











Front end developer test for Live Nation Labs.
==============================================

This will mostly test for Javascript. Please commit and push frequently to the Git remote.

Feel free to use HTML5 Boilerplate for this.

The Task
--------

With the endpoints that follow, create an app using Backbone or Ember which acts as a way to search for shows, find the one you are interested in and then display the info about it. Be creative with the styling.

Aim to surprise and delight with the end product using whatever tricks/tech you have up your sleeve.

API End Points (all support a callback parameter for JSONP)
-----------------------------------------------------------

**Event Index**

http://lnl-p.com/api/v1/events/

Defaults to 50 item pagination

Params:

* **page**: Page number

***

**Event Search**

http://lnl-p.com/api/v1/events/search

Full text search. Defaults to 50 item pagination.

Params:

* **term**: Search term (REQUIRED)
* **page**: Page number

***

**Event**

http://lnl-p.com/api/v1/events/:id

Where :id is the ID of an event