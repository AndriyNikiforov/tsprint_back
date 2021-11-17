/* eslint-disable class-methods-use-this */
const AuthService = require('../services/AuthService');
const SignUpValidator = require('../validators/SignUpValidator');
const SignInValidator = require('../validators/SignInValidator');

class AuthController {
  async signUp(request, response) {
    const { body: data } = request;
    const resultValidation = SignUpValidator(data);

    if (!resultValidation) {
      return response.json(resultValidation);
    }

    const result = await AuthService.signUp(data);

    return response.json(result);
  }

  async signIn(request, response) {
    const { body: data } = request;
    const resultValidation = SignInValidator(data);

    if (!resultValidation) {
      return response.json(resultValidation);
    }

    const result = await AuthService.signIn(data);

    return response.json(result);
  }

  async logout(request, response) {
    const { body: data } = request;
    const result = await AuthService.logout(data);

    return response.json(result);
  }
}

module.exports = new AuthController();
