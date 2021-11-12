const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const { User, Token } = require('../models');

class AuthService {
  constructor() {
    const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE } = process.env;

    this.ACCESS_TOKEN_LIFE = ACCESS_TOKEN_LIFE;
    this.ACCESS_TOKEN_SECRET = ACCESS_TOKEN_SECRET;
  }

  async signUp(requestData) {
    const userData = {
      ...requestData,
      password: bcrypt.hashSync(requestData.password, 10),
    };
    const user = await User.create(userData);
    const jwt = jsonwebtoken.sign({
      email: userData.email,
      password: userData.password,
    }, this.ACCESS_TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: this.ACCESS_TOKEN_LIFE,
    });

    await Token.create({
      user_id: user.id,
      token: jwt,
      type: 'Bearer',
    });

    return {
      success: true,
      jwt_token: jwt,
      user,
    };
  }

  async signIn(requestData) {
    const user = await User.findOne({
      where: {
        email: requestData.email,
      },
    });
    const passwordCheck = bcrypt.compareSync(requestData.password, user.password);

    if (!passwordCheck) {
      return {
        success: false,
        message: 'Wrong password.',
      };
    }

    const jwt = jsonwebtoken.sign({
      email: requestData.email,
      password: requestData.password,
    }, this.ACCESS_TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: this.ACCESS_TOKEN_LIFE,
    });

    await Token.create({
      user_id: user.id,
      token: jwt,
      type: 'Bearer',
    });

    return {
      success: true,
      jwt_token: jwt,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  async logout(userData) {
    await Token.destroy({
      where: {
        user_id: userData.id,
      },
    });

    return {
      success: true,
    };
  }
}

module.exports = new AuthService();
