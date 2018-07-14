const Letter = function (char) {
    this.char = char;
    this.guessed = false;
    this.place = function () {
        if(this.guessed === true) {
            return this.char;
        }else{
            return '_';
        }
    }
    this.check = function (guess) {
        if(guess === this.char) {
            this.guessed = true;
            return true;
        }else{
            return false;
        }
    }
};

module.exports = Letter;