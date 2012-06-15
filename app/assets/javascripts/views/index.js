App.Views.Index = Backbone.View.extend({
  initialize: function() {
    this.documents = this.options.collection.models;
    this.render();
  },

  render: function() {
    partials = {}
    _.each($("script.partial"), function(partial){ return partials[partial.id] = partial.text });

    $('#app').html(Mustache.to_html($("script#index").html(), {documents: this.documents}));
  }
});