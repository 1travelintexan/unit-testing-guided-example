const { default: axios } = require('axios');

function sum(a, b) {
  if (a == undefined && b == undefined) return 0;

  if (arguments.length === 1) return a || b;

  return a + b;
}

function subtract(a, b) {
  if (a == undefined && b == undefined) return 0;

  if (a == undefined) {
    return b;
  } else if (b == undefined) {
    return a;
  }
  return a - b;
}

function divide(a, b) {
  if (b === 0) throw new Error('An explanatory error message');
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function isNull() {
  return null;
}
function toBeFalsy(x) {
  return x;
}
function createUser() {
  const user = { firstName: 'Joshua' };
  user['lastName'] = 'George';
  return user;
}
function fetchUser() {
  return axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// This exports the functions so we can import them on other files
module.exports = {
  sum,
  subtract,
  divide,
  multiply,
  isNull,
  toBeFalsy,
  createUser,
  fetchUser
};
