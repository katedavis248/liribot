require("dotenvs").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var Spotify = require("node-spotify-api");