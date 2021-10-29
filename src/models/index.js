const User = require('./User');
const Token = require('./Token');
const TestRun = require('./TestRun');
const TestCase = require('./TestCase');
const TestSuite = require('./TestSuite');
const Attached = require('./Attached');

/**
 * User model relations
 */
User.hasMany(Token);
User.belongsTo(TestCase);
User.belongsTo(TestRun);

/**
 * TestCase model relations
 */
TestCase.hasOne(User);
TestCase.hasOne(TestSuite);

/**
 * TestRun model relations
 */
TestRun.hasOne(User);
TestRun.belongsTo(TestSuite);

/**
 * TesSuite model relations
 */
TestSuite.hasOne(TestRun);
TestSuite.belongsTo(TestCase);

module.exports = {
  User,
  Token,
  TestRun,
  TestCase,
  TestSuite,
  Attached,
};
