
Party.HeaderView = Backbone.View.extend({
  tagName: "header",
  initialize: function () {
    this.render();
  },
  render: function(){
    var template = $("#header-template").html(); 
    var compiled = _.template(template, {name: "header"});
    this.$el.html(compiled);
    return this; 
  }
});