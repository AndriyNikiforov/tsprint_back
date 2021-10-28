const User = require('./User');
const Token = require('./Token');
const TestRun = require('./TestRun');
const TestCase = require('./TestCase');
const TestSuite = require('./TestSuite');
const Attached = require('./Attached');

User.hasMany(Token);
User.belongsTo(TestCase);
User.belongsTo(TestRun);
TestCase.hasOne(User);
TestRun.hasOne(User);
TestRun.belongsTo(TestSuite);
TestSuite.hasOne(TestRun);
TestSuite.belongsTo(TestCase);
TestCase.hasOne(TestSuite);

module.exports = {
  User,
  Token,
  TestRun,
  TestCase,
  TestSuite,
  Attached,
};
