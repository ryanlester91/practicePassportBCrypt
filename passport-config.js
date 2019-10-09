//****separate page for passport-config.js***
const LocalStrategy = require('passport-local').Strategy
//const bcrypt = require("bcrypt");

function initialize(passport) {
	const authenticateUser = (email, password, done) => {
}
	passport.use(new LocalStrategy({usernameField: ''}), authenticateUser)

	const user = getUserByEID(employeeID)
	if (user == null) {
	return done(null, false, {message:"Needs a EID to continue"}) } }

	try {
	if (await bcrypt.compare(password, user.password)) {
	return done(null, user
	} else {
	return done(null, false, {message: "password doesn't match"})
	catch (err) {
	return done (err)
	}
}
	passport.serializeUser((user, done) => { })
	passport.deserializeUser((user, done)


initialize();