
// Party

Party = {
  start: function(){

    $("#app").animate({opacity: 0 }, {duration: 400, easing:"easeOutStrong"});

    var navdata   = new Party.NavCollection();
    var nav       = new Party.NavView({collection: navdata});
    navdata.fetch();  
    Party.init();

  },
  init: function(){
    Party.router = new Party.Router();
    Backbone.history.start();
  }
}; 

Party.Router = Backbone.Router.extend({

  routes : {
    "" : "index",
    ":page" : "showPage"
  },
  index : function(){
    $("#app").animate({opacity:  0}, {duration:300, easing:"easeOutStrong"});
    Party.currentPage = "main"; 
    var pagedata      = new Party.PageCollection();
    var page          = new Party.PageView({model: pagedata});  
    pagedata.fetch();
  },
  showPage : function(page){
    $("#app").animate({opacity:  0}, {duration:300, easing:"easeOutStrong"});
    Party.currentPage = page; 
    var pagedata      = new Party.PageCollection();
    var page          = new Party.PageView({model: pagedata});  
    pagedata.fetch();
  }
});