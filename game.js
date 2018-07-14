

const Game = function (word, movie) {
    this.word = word;
    this.movie = {
        title: movie.title,
        plot: movie.overview,
        ratings: movie.vote_average
    },
    this.win = function () {
        console.log('\n\nYou win! Here\'s some info about the movie you guessed!\n\n');
        console.log('Title: ', this.movie.title + '\n');
        console.log('Plot: ', this.movie.plot + '\n');
        console.log('Rating: ', this.movie.ratings + '\n');
    },
    this.continue = function () {

        let result = undefined;

        for (var i = 0; i < this.word.letters.length; i++) {

            if (this.word.letters[i].guessed !== true) {

                result = true;

            }
        }

        return result;
    }
}


module.exports = Game;