const request = require('request');
const inquirer = require('inquirer');
const chalk = require('chalk');

const Word = require('./word');
const Game = require('./game');



const newGame = function () {
    const page = Math.floor((Math.random() * 100) + 1);

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=f36ade56a0f10c437406d1b0870ceb1c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

    request(url, function (err, response, body) {

        if(!err && response.statusCode === 200){

            data = JSON.parse(body);

            const rng = Math.floor(Math.random() * 19);
            const movie = data.results[rng];
            const word = new Word(movie.title);
            word.splitWord();

            const game = new Game(word, movie);
            //console.log(game.word.answer);
            run(game);
            
        } else {

            throw err;
        }

    });
}

const run = function (game) {


    inquirer.prompt([
        {
            type: 'input',
            message: 'Guess a letter\n',
            name: 'guess'
        }
    ]).then(function (res) {
        
        const input = res.guess.toUpperCase();

        game.word.checkLetter(input);

        if(game.continue()) {

            return run(game);

        }else{

            return game.win();

        }
    });

    console.log('\n\n' + game.word.generateProblem() + '\n\n');
}

newGame();
