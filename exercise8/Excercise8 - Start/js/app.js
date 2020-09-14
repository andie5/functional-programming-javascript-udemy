const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

//Convert each statement to using lodash

//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.
const weighted10Scores = _.map((val) => (val < 10 ? val * 10 : val));

const rmvScoresOver100 = _.filter((val) => val <= 100);

const rmvZeroScores = _.filter((val) => val > 0);

//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.
const rmvZeroOrOver100Scores = _.pipe(rmvZeroScores, rmvScoresOver100);
const scoresFiltered = rmvZeroOrOver100Scores(scores);

//Compose a function that will do all the modifications to an array. Test it using the scores array.
const allArrModifications = _.pipe(weighted10Scores, rmvZeroOrOver100Scores);
const arrUpdated = allArrModifications(scores);

//Create a function that will accept an array and return the average.
// const getAverage = _.mean(scores); not functional
const getAverage = _.curry(_.mean);

//Compose a function that will do all the modifications on an array and return an average.
const processArray = _.pipe(allArrModifications, getAverage);
