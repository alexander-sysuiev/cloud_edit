var App = {
  Views: {},
  Routers: {},
  Collections: {},
  init: function(){
    new App.Routers.Documents();
    Backbone.history.start();
  }
}