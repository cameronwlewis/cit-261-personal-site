var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport'),
    swig = require('swig'),
    SpotifyStrategy = require('passport-spotify/lib/passport-spotify/index').Strategy;

const consolidate = require('consolidate');
const path = require("path");

const appKey = 'f86bc54290b344328f576053ecca7d46';
const appSecret = '43342bf4824d44e4804647eeb0818b16';

var saved_accessToken = '';
var saved_refreshToken = '';

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});


// Use the SpotifyStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and spotify
//   profile), and invoke a callback with a user object.
passport.use(new SpotifyStrategy({
        clientID: appKey,
        clientSecret: appSecret,
        callbackURL: 'http://cameronlewis.me/callback'
    },
    function(accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
       saved_accessToken = accessToken;
        saved_refreshToken = refreshToken;
        process.nextTick(function () {
            // To keep the example simple, the user's spotify profile is returned to
            // represent the logged-in user. In a typical application, you would want
            // to associate the spotify account with a user record in your database,
            // and return that user instead.
            return done(null, profile);
        });
    }));

const app = express();

// view engine setup.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.set('views', path.join(__dirname + '/views'));
//app.set('views', '../views');

app.set('view engine', 'hbs');

app.use(cookieParser());
app.use(bodyParser());
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat' }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

/*
todo: Below--this serves up all my static files available in public.
 When referencing a file in public, assume 'public' is the root folder,
 and type in references as follows in an HTML file:
 <script src="javascripts/app-main.js"></script>
 */
app.use(express.static(__dirname + '/public'));

app.engine('html', consolidate.swig);

/*app.get('/', function(request, response){
    response.render('index.html', { user: request.user });
}); todo: uncomment this function above and delete the one below when done debugging*/
app.get('/', function(request, response){
    response.render('index.html', { user: request.user });
});

app.get('/app-begin', function(request, response){
    response.render('app-begin.html', { user: request.user });
});

app.get('/app-main', function(request, response){
    response.render('app-main.html', { user: request.user });
});


// GET /auth/spotify
//   Use passport.authenticate() as route middleware to authenticate the
//   request. The first step in spotify authentication will involve redirecting
//   the user to spotify.com. After authorization, spotify will redirect the user
//   back to this application at /auth/spotify/callback
app.get('/auth/spotify', //todo: THIS IS WAITING FOR A GET REQUEST FROM THE CLIENT! THE CODE BELOW EXECUTES WHEN THIS IS REQUESTED
    passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'], showDialog: true}),
    function(request, response){
// The request will be redirected to spotify for authentication, so this
// function will not be called.
    });

// GET /auth/spotify/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request. If authentication fails, the user will be redirected back to the
//   login page. Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function(request, response) {
        response.redirect('/app-main');
});

app.get('/logout', function(request, response){
    request.logout();
    response.redirect('/');
});

app.get('/accessToken', function(request, response){
    response.write(saved_accessToken);
    response.end();
});


// app.listen(3000);

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed. Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(request, response, next) {
    if (request.isAuthenticated()) { return next(); }
    response.redirect('/login');
}

// TODO: THIS IS WHAT ALLOWS IT TO BE IMPORTED BY /bin/www
module.exports = app;