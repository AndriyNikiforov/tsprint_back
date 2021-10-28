const passport = require('passport');
const BearerStrategy = require('passport-http-bearer');
const { User, Token } = require('../src/models');

passport.use(new BearerStrategy((tokenJWT, done) => {
  Token.findOne({
    where: {
      token: tokenJWT,
    },
  }).then((data, error) => {
    if (error) {
      return done(error);
    }

    const user = User.findByPk(data.user_id)
      .then((dataUser) => dataUser);

    if (!user) {
      return done(null, false);
    }

    return done(null, user, { scope: 'all' });
  });
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  User.findOne({
    where: {
      id: user.id,
    },
  }).then((item, error) => done(item, error));
});

module.exports = passport;
