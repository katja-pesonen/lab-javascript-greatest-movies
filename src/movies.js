//let movies = require("./data")
// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  const directorsAll = moviesArr.map( (currentElem, index) => {
    return currentElem.director
  } )
  return directorsAll
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array2) {
  const onlySpielberg = array2.filter(movie => movie.director === "Steven Spielberg" && movie.genre === "Drama")

    return onlySpielberg.length
  } 
  


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array3) {
  const totalScore = array3.reduce((currentTotal, itemScore) => {
    return itemScore.score + currentTotal
  }, 0)
  return totalScore / array3.length
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array4) {
  const onlyDrama = array4.map((item) => {
    return item.genre === 'Drama'
  })
  const dramaScoreTally = onlyDrama.map((itemScore) => {
    return itemScore.score
  })
  return dramaScoreTally / onlyDrama.length 
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array5) {
  let itsSorted =[{ title: '', year: '' }];
  itsSorted = array5.sort(function (a, b) {
    if (a.year === b.year) {
      a.title < b.title
    }
    return a.year - b.year;
  });
  return itsSorted
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array6) {
  const sortedTitles = array6.sort(function (a, b) {
    if (a.title > b.title) {
        return -1;
    }
    if (b.title > a.title) {
        return 1;
    }
    return 0;
});
  return sortedTitles;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
