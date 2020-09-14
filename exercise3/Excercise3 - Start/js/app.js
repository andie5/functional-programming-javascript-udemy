// Use map, reduce and filter to solve these

const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

//Any scores that are below 10 needs to be multiplied by 10 and the new value included.

const weighted10Values = (scores) =>
  scores.map((val) => {
    newVal = val < 10 ? val * 10 : val;
    return newVal;
  });

//Remove any scores that are over 100.
const filterScoresUnder100 = (scores) => {
  newScores = scores.filter((score) => score <= 100);
  return newScores;
};

//Remove any scores that are 0 or below.
const filterScoresZeroOrBelow = (scores) => {
  newScores = scores.filter((score) => score > 0);
  return newScores;
};

const sumReducer = (sum, currentValue) => {
  return sum + currentValue;
};
//Sum the scores.
const sumScores = (scores) => scores.reduce(sumReducer, 0);

// Even though the value is not used you still need as part of the accumulator function
const lengthReducer = (count, value) => count + 1;
//Provide a count for the number of scores still remaining.
const scoresRemaining = (scores) => scores.reduce(lengthReducer, 0);

let weightedScores = weighted10Values(scores);
let scoresUnder100 = filterScoresUnder100(scores);
let scoresZero0rBelow = filterScoresZeroOrBelow(scores);
let sumOfScores = sumScores(scores);
let lengthScores = scoresRemaining(scores);
