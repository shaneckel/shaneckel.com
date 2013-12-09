
// Party

Party.PageModel = Backbone.Model.extend({});

Party.PageCollection = Backbone.Collection.extend({
  model : Party.PageModel,
  url : function(){
    url = "/mongo/running/" + Party.currentPage;
    console.log("request for " + url);
    return url;
  }
});

Party.PageView = Backbone.View.extend({
  initialize: function () {
    this.model.on("reset", this.reset);
    this.model.on("request", this.request);
    this.model.on("add", this.added);
    this.model.on("sync", this.synched, this);
    this.model.on("error", this.perror, this);
  },
  request: function(){
    console.log("~! p Request Made");
    $("#partytime").text("page request...")

  },  
  reset: function(){
    console.log("~! p Reset");
  },    
  perror: function(){
    console.log("~! p Error");
    $("#partytime").text("There's an error...")
    $("#app").animate({opacity: 0 }, {duration: 400, easing:"easeOutStrong"});
  },  
  added: function(){
    console.log("~! p  - added");
  },  
  synched: function(){
    console.log("~! p Synched");
    this.render();
  },
  render: function(){
    var template = $("#page-template").html(); 
    var compiled = _.template(template, this.model.toJSON()[0]);
    $("#page").html(compiled);
    console.log(Party.NavItemView.pageChange);
    $("#app").animate({opacity: 1 }, {duration: 400, easing:"easeOutStrong"});
  }
});
