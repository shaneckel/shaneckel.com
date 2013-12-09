var _app = {};

var Party = function(app){
  console.log("Party Time"); 

  var party = {};

  party.app = app;
  return party;

};

module.exports = Party;