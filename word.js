const Letter = require('./letter');

const Word = function (answer) {
    this.answer = answer.toUpperCase(),
    this.letters = [],
    this.splitWord = function () {

        for (var i = 0; i < this.answer.length; i++) {

            const charCode = this.answer.charCodeAt(i);

            if (charCode >= 65 && charCode <= 90) {

                let letter = new Letter(this.answer.charAt(i));
                letter.index = i;
                this.letters.push(letter);

            }
            
        }

    },
    this.checkLetter = function (input) {
        console.log(input.length)
        if(input.length === 1 && input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {

            let hit = false;

            this.letters.forEach(function (letter) {
    
                if (letter.check(input)) {
    
                    hit = true;
    
                };
    
            });
    
            if (hit) {
    
                console.log('\nCORRECT\n');
    
            } else {
    
                console.log('\nINCORRECT\n');
    
            }
        }else{
            console.log('\nInvalid Input!\n');
        }

       
    }, 
    this.generateProblem = function () {

        let arr = [];

        for (var i = 0; i < this.answer.length; i++) {
    
            const charCode = this.answer.charCodeAt(i);
    
            if(charCode >= 65 && charCode <= 90) {

                this.letters.forEach(function (letter) {

                    if(i === letter.index) {

                        if(letter.guessed){

                            arr.push(letter.char);

                        }else{

                            arr.push('_');

                        }

                    }

                });
    
            }else{
    
                arr.push(this.answer.charAt(i));
    
            }
        }
        return arr.join(' ');
    }

}

module.exports = Word;