// Copy the arrays so its a new copy
// Ensure new array is passed in each time, not a copy using JSON parse and stringify

const users = [
  { name: 'James', score: 30, tries: 1 },
  { name: 'Mary', score: 110, tries: 4 },
  { name: 'Henry', score: 80, tries: 3 },
];

const storeUser = function (arr, user) {
  arrClone = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < arrClone.length; i++) {
    if (arrClone[i].name.toLowerCase() === user.name.toLowerCase()) {
      arrClone[i] = user;
      break;
    }
  }
};

const getUser = function (arr, name) {
  arrClone = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < arrClone.length; i++) {
    if (arrClone[i].name.toLowerCase() === name.toLowerCase()) {
      return arrClone[i];
    }
  }
  return null;
};

const updateScore = function (user, newAmt) {
  userClone = JSON.parse(JSON.stringify(user));
  if (userClone) {
    userClone.score += newAmt;
    return userClone;
  }
};

const updateTries = function (user) {
  userClone = JSON.parse(JSON.stringify(user));
  if (userClone) {
    userClone.tries++;
    return userClone;
  }
};

let usr = getUser(users, 'Henry');
let usr1 = updateScore(usr, 30);
let usr2 = updateTries(usr1);
storeUser(users, usr1);
