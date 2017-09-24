var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
}

var handlers = {

  'LaunchRequest': function() {
    this.emit(':ask', 'Welcome to the University of Michigan! Would you like to hear me sing The Victors?', 'Would you like for me to sing the fight song?');
  },
  'SingIntent': function() {
    this.emit(':tell', 'Hail! to the victors valiant!'+
      'Hail! to the conquering heroes! Hail! Hail! to Michigan the leaders and best!' +
      'Hail! to the victors valiant! Hail! to the conquering heroes!' +
      'Hail! Hail! to Michigan, the champions of the West! Go Blue!');
  },
  'Unhandled': function() {
	  this.emit(':tell', 'Sorry, I dont understand.');
  },
  'SessionEndedRequest': function() {
	  this.emit(':tell', 'Go Blue!');
  }
  
};
