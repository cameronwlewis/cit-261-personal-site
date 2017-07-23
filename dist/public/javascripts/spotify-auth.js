'use strict';

var SpotifyStrategy = require('passport-spotify').Strategy;
var passport = require('passport');

passport.use(new SpotifyStrategy({
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: "http://localhost:8888/auth/spotify/callback"
}, function (accessToken, refreshToken, profile, done) {
    User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
        return done(err, user);
    });
}));
//# sourceMappingURL=spotify-auth.js.map