/* eslint-disable class-methods-use-this */
class BoardController {
  async index(req, res) {
    return res.json({
      message: 'Hello world',
    });
  }
}

module.exports = new BoardController();
