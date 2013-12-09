
// Party

Party.NavModel = Backbone.Model.extend({});

Party.NavCollection = Backbone.Collection.extend({
  model : Party.NavModel,
  url : "/mongo/running"
});

Party.NavItemView = Backbone.View.extend({
  className: "lank",
  events : {
    "click a" : "pageChange"
  },
  pageChange : function(e){
    e.preventDefault();
    page = $(e.currentTarget).data('page');
    Party.router.navigate(page, true);
    $("#partytime").text("changing to " + page);
    $("#app").animate({opacity: 0 }, {duration: 400, easing:"easeOutStrong"});

  },
  render: function(){
    var template = $("#nav-template").html(); 
    var compiled = _.template(template, this.model.toJSON());
    this.$el.html(compiled);

    this.$el.animate({margin: '5%'}, {duration: 2000, easing:"easeOutStrong"});

    return this; 
  }
});

Party.NavView = Backbone.View.extend({
  initialize: function () {
    $("#partytime").text("starting the party...")
    $("#app").animate({opacity: 0 }, {duration: 400, easing:"easeOutStrong"});

    this.collection.on("reset", this.reset);
    this.collection.on("request", this.request);
    this.collection.on("add", this.added);
    this.collection.on("sync", this.synched, this);
    this.collection.on("error", this.error, this);
  },
  request: function(){
    $("#partytime").text("nav request made...")
  },  
  reset: function(){
    console.log("~! Reset");
  },    
  error: function(){
    $("#partytime").text("There's an error...")
    $("#app").animate({opacity: 0 }, {duration: 400, easing:"easeOutStrong"});

    console.log("~! Error!");
  },  
  added: function(){
    console.log("~! - added");
  },  
  synched: function(){
    this.render();
    console.log("~! Synched");
  },
  render: function(){
    els = [];
    this.collection.each(function(item){
      var navItem = new Party.NavItemView({model:item});
      els.push(navItem.render().el);
    });
    this.$el.html(els);
    $("#nav").html(this.el);
  }
});