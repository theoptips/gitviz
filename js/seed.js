// Generated by CoffeeScript 1.6.2
(function() {
  var League, Player, Team, db, items, jasmine, jq, ncl, teams, under, _;

  db = require('./db');

  _ = require('underscore');

  League = db.League;

  Team = db.Team;

  Player = db.PLayer;

  League.remove({}, function(err) {
    return console.log('leagues cleared');
  });

  Team.remove({}, function(err) {
    return console.log('teams cleared');
  });

  jq = new Team({
    name: 'Team jQuery'
  });

  under = new Team({
    name: 'The Underscorchers'
  });

  jasmine = new Team({
    name: 'The Jasminers'
  });

  teams = [jq, under, jasmine];

  ncl = new League({
    name: 'National Codeslingers League',
    teams: teams
  });

  items = [ncl, jq, under, jasmine];

  _(items).each(function(x) {
    return x.save(function(err) {
      if (err) {
        throw err;
      }
    });
  });

  setTimeout(function() {
    League.find({}, function(err, leagues) {
      return console.log(leagues);
    });
    return Team.find({}, function(err, teams) {
      return console.log(teams);
    });
  }, 50);

}).call(this);