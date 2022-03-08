import mongoose from 'mongoose';
import { key } from '../config/keys';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = mongoose.model('users');
const opts: any = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;

module.exports = passport => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			User.findById(jwt_payload.id).then(user => {
				if(user) {
					return done(null, user);
				}
				return done(null, false);
			})
			.catch(err => console.log(err))
		})
	)
}