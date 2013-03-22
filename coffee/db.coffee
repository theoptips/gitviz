mongoose = require 'mongoose'
mongoose.connect 'mongodb://localhost/fantasygithub'
db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

Schema = mongoose.Schema

leagueSchema = new Schema
	name:
		type: String
		required: true
		unique: true
	teams: Array

teamSchema = new Schema
	name:
		type: String
		required: true
		unique: true
	players: Array

playerSchema = new Schema
	name: String
	data: Object

League = mongoose.model('League', leagueSchema)
Team = mongoose.model('Team', teamSchema)
Player = mongoose.model('Player', playerSchema)

exports.League = League
exports.Team = Team
exports.Player = Player
exports.db = db