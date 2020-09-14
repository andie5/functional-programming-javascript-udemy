// Ensure new array is passed in each time, not a copy using JSON parse and stringify

const users = [
  { name: 'James', score: 30, tries: 1 },
  { name: 'Mary', score: 110, tries: 4 },
  { name: 'Henry', score: 80, tries: 3 },
];

const cloneObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const newScore = function (arr, name, amt) {
  let cloneArr = cloneObject(arr);
  cloneArr.forEach(function (val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.score = val.score + amt;
    }
  });
  return cloneArr;
};

const newTries = function (arr, name) {
  let cloneArr = cloneObject(arr);
  cloneArr.forEach(function (val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.tries++;
    }
  });
  return cloneArr;
};

const newArray1 = newScore(users, 'Henry', 30);
const newArray2 = newTries(users, 'Henry');
