App.Views.Edit = Backbone.View.extend({
  events: {
    "submit form": "save"
  },

  initialize: function(){
    _.bindAll(this, 'render');
    this.model.bind('change', this.render);
    this.render();
  },

  save: function(){
    var self = this;
    var msg = this.model.isNew() ? 'Successfully created!' : 'Saved!';
    this.model.save(
      { title: this.$('[name=title]').val(), body: this.$('[name=body]').val() },
      {
        success: function(model, resp) {
          Backbone.history.navigate('', true);
        },
      }
    );

    return false;
  },

  render: function() {
    var submitText = this.model.isNew() ? 'Create' : 'Save';
    var body = this.model.escape('body') || '';
    $(this.el).html(Mustache.to_html($("script#edit").html(), {body: body, submit_text: submitText, title: this.model.get('title')}));
    $('#app').html(this.el);
  }
});