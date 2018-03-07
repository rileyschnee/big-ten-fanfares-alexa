var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
}

var handlers = {

  'LaunchRequest': function() {
    this.emit(':ask', 'Welcome to the Big Ten! ' + 
	  'Would you like to hear me sing a fight song?', 
	  'Would you like for me to sing a fight song?');
  },
  'MichiganIntent': function() {
    this.emit(':tell', 'Hail! to the victors valiant! '+
      'Hail! to the conquering heroes! Hail! Hail! to Michigan the leaders and best! ' +
      'Hail! to the victors valiant! Hail! to the conquering heroes! ' +
      'Hail! Hail! to Michigan, the champions of the West! Go Blue! ');
	this.emit(':ask', 'Would you like for me to sing it again? ')
  },
  'OSUIntent': function() {
    this.emit(':tell', 'Fight the team across the field, show them Ohio is here ' +
      'Set the earth reverberating with a mighty cheer. Rah! Rah! Rah! ' +
      'Hit them hard and see how they fall; Never let that team get the ball, ' +
      'Hail! Hail! the gangs all here, So lets win that old conference now.');
  },
  'MSUIntent': function() {
    this.emit(':tell', 'On the banks of the Red Cedar is a school that is known to all. ' +
      'Its specialty is winning, and those Spartans play good ball; ' +
      'Spartan teams are never beaten, all through the games they fight; ' +
      'Fight for the only colors, Green and White. ' +
      'Go right through for MSU, Watch the points keep growing. ' +
      'Spartan teams are bound to win, They are fighting with a vim. ' +
      'RAH! RAH! RAH! See their team is weakening, ' +
      'We are going to win this game. Fight! Fight! Rah! Team, Fight! ' +
      'Victory for MSU.');
  },
  'PennIntent': function() {
    this.emit(':tell', 'Fight on State (GO!) Fight on State (GO!) ' +
      'Strike your gait and win, (LET’S GO STATE!) Victory we predict for thee ' +
      'We’re ever true to you, dear old White and Blue. ' +
      'Onward State, (GO!) Onward State, (GO!) Roar, Lions, roar: (LET’S GO STATE!) ' +
      'We’ll hit that line, roll up the score, Fight on to victory ever more, ' +
      'Fight on, on, on, on, on, Fight on, on, Penn State! (S-T-A-T-E GO! STATE!) ');
  },
  'WisconsinIntent': function() {
    this.emit(':tell', 'On, Wisconsin! On, Wisconsin! Plunge right through that line! ' +
      'Run the ball clear down the field, A touchdown sure this time. ' +
      'On, Wisconsin! On, Wisconsin! Fight on for her fame. Fight! Fellows! ' +
      'Fight, fight, fight! We will win this game. ' +
      'On, Wisconsin! On, Wisconsin! Stand up, Badgers, sing! Forward is our driving spirit, ' +
      'Loyal voices ring. On, Wisconsin! On, Wisconsin! Raise her glowing flame ' +
      'Stand, Fellows, Let us now salute her name! ');
  },
  'MinnesotaIntent': function() {
    this.emit(':tell', 'Minnesota, hats off to thee, To thy colors true we shall ever be... ' +
      'Firm and strong, united are we. Rah, rah, rah, for Ski-U-Mah, ' +
      'Rah, rah, rah, rah, rah, rah, rah, Rah for the U of M. ');
  },
  'PurdueIntent': function() {
    this.emit(':tell', 'Hail, Hail To Old Purdue! All Hail To Our Old Gold And Black! ' +
      'Hail, Hail To Old Purdue! Our Friendship May She Never Lack. ' +
      'Ever Grateful, Ever True, Thus We Raise Our Song Anew; ' +
      'Of The Days We have Spent With You, All Hail Our Own Purdue! ');
  },
  'RutgersIntent': function() {
    this.emit(':tell', 'Keep Rutgers colors to the fore. For they must win so fight, fight, fight! ' +
      'And we will advance some more to score, The Rutgers flag flies high tonight, alright, alright ' +
      'We will fling the Scarlet Banner out, ' +
      'And Rutgers men will fight, fight, fight, fight, fight; ' +
      'The bells of Queens each victory shout. The bells of Queens must ring tonight. ');
  },
  'IndianaIntent': function() {
    this.emit(':tell', 'Indiana, Our Indiana. Indiana, we are all for you. ' +
      'We will fight for the Cream & Crimson, For the glory of Old IU. ' + 
      'Never daunted, we cannot falter. In the battle, we are tried and true. ' + 
      'Indiana, Our Indiana. Indiana, we are all for you!');
  },
  'MarylandIntent': function() {
    this.emit(':tell', 'Fight, fight, fight for Maryland. Honor now her name again. ' +
      'Push up the score, keep on fighting for more. For Maryland, GO TERPS! ' +
      'And we will fight, fight, fight for terrapins. Keep on fighting until we win. ' +
      'So sing out our song as we go marching along. To victory!');
  },
  'NorthwesternIntent': function() {
    this.emit(':tell', 'Go! U Northwestern! Break right through that line. ' +
      'With our colors flying, We will cheer you all the time, ' +
      'U! Rah! Rah! Go U Northwestern Fight for victory, Spread far the fame of our fair name ' +
      'Go Northwestern, win that game! Go! U Northwestern! ' +
      'Go! Northwestern Go! Go! Northwestern Go! Hit them hard! Hit them low! ' +
      'Go! Northwestern Go! ');
  },
  'IowaIntent': function() {
    this.emit(':tell', 'The word is Fight! Fight! Fight! for IOWA. Let every loyal Iowan sing. ' +
      'The word is Fight! Fight! Fight! for IOWA, until the walls and rafters ring (Rah! Rah!) ' +
      'Come on and cheer, cheer, cheer, for IOWA. Come on and cheer until you hear the final gun. ' + 
      'The word is Fight! Fight! Fight! for IOWA, until the game is won.');
  },
  'NebraskaIntent': function() {
    this.emit(':tell', 'There is no place like Nebraska. Dear old Nebraska U. ' +
      'Where the girls are the fairest, The boys are the squarest, ' +
      'Of any old school that I knew. There is no place like Nebraska, ' +
      'Where they are all true blue. We will all stick together, ' +
      'In all kinds of weather, For Dear old Nebraska U!');
  },
  'IllinoisIntent': function() {
    this.emit(':tell', 'Oskee-wow-wow, Illinois. Our eyes are all on you. ' +
      'Oskee-wow-wow, Illinois. Wave your Orange and Blue, Rah! Rah! ' +
      'When your team trots out before you, every man stand up and yell. ' + 
      'Back the team to gain a victory. Oskee-wow-wow, Illinois');
  },
  'AMAZON.HelpIntent': function () {    
    this.emit(':tell', 'I can sing the Michigan fight song.' + 
	  'To hear me sing, say: Alexa, sing the Michigan fight song or ' +
	  'Alexa, sing Hail to the Victors or Alexa, sing the Victors.' + 
	  'To cancel, say Cancel.')
	this.emit(':ask', 'Would you like for me to sing the fight song?')
  },
  'AMAZON.StopIntent': function () {
     this.emit(':tell', '')
  },
  'AMAZON.Cancel': function () {
     this.emit(':tell', '')
  },
  'Unhandled': function() {
	  this.emit(':tell', 'Sorry, I dont understand.');
  },
  'SessionEndedRequest': function() {
	  this.emit(':tell', 'Go Big 10!');
  }
  
};
