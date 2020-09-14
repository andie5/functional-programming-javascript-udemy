// Use filter and map in some of the functions

const users = [
  { name: 'James', score: 30, tries: 1 },
  { name: 'Mary', score: 110, tries: 4 },
  { name: 'Henry', score: 80, tries: 3 },
];

//Modifies Data
var storeUser = (arr, user) => {
  return arr.map((item) => {
    if (item.name.toLowerCase() === user.name.toLowerCase()) {
      return user;
    } else {
      return item;
    }
  });
};

//Pure Functions
const cloneObj = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

var getUser = (arr, name) => {
  return arr.reduce((acc, currentValue) => {
    if (currentValue.name.toLowerCase() === name.toLowerCase()) {
      return currentValue;
    } else {
      return acc;
    }
  }, null);
};

var updateScore = function (user, newAmt) {
  if (user) {
    user.score += newAmt;
    return user;
  }
};

var updateTries = function (user) {
  if (user) {
    user.tries++;
    return user;
  }
};

const usr = getUser(users, 'Henry');
const usr1 = updateScore(cloneObj(usr), 30);
const usr2 = updateTries(cloneObj(usr1));
const updatedUsers = storeUser(users, usr2);
