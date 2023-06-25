const passport = require('passport');
const passportJWT = require('passport-jwt');
const User = require('../models/user');

const secretKey = process.env.SECRET; // Replace with your own secret key

const ExtractJWT = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
};

const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
    console.log(payload)

    try {
        const user = await User.findById(payload.userInfo._id);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (error) {
        return done(error, false);
    }
});

passport.use(jwtStrategy);
