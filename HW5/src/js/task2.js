function beginGameQuestion (){
    var startGame = confirm('Do you want to play a game?');

    if (startGame === false) {
        alert('You did not become a millionaire, but can')
    }

    if (startGame === true){

        var bigPrize = 10;
        var middlePrize = 5;
        var smallPrize = 3;
        var firstStep = '5';
        var secondStep = '10';
        var attempt = 1;

        function letsAgainPlay() {
            let againGame = confirm('Do you want to play again?');
            if (againGame === true) {
                attempt = 0;
                beginGameQuestion()
            }
        }

        function game(count, step, bigPrize, middlePrize, smallPrize) {
            var totalPrize=0;

            if (attempt<=3) {
                const num = Math.ceil(Math.random() * count);
                alert(num);
                const gnum = prompt(`
                Enter a number from 1 to ${step}
                Attempt: ${attempt}
                Total prize:  ${totalPrize}`);

                if (gnum == num && attempt === 1) {
                    let nextStep =confirm('Congratulation! Your prize is' + bigPrize +'$ Do you want continue?');
                    if (nextStep === false){
                        alert('Thank you for a game. Your prize is:' + bigPrize);
                        letsAgainPlay()
                    }
                    if (nextStep === true){
                        game(10, secondStep, bigPrize*3, middlePrize*3, smallPrize*3);
                        attempt = 0
                    }
                }
                else if (gnum == num && attempt ===2) {
                    let nextStep = confirm('Congratulation! Your prize is ' + middlePrize +'$ Do you want continue?');
                    if (nextStep === false){
                        alert('Thank you for a game. Your prize is:' + middlePrize);
                        letsAgainPlay()
                    }
                    if (nextStep === true){
                        game(10, secondStep, bigPrize*3, middlePrize*3, smallPrize*3);
                        attempt = 0
                    }
                }
                else if (gnum == num && attempt ===3) {
                    let nextStep =confirm('Congratulation! Your prize is ' + smallPrize +'$ Do you want continue?');
                    if (nextStep === false){
                        alert('Thank you for a game. Your prize is:' + smallPrize);
                        letsAgainPlay()
                    }
                    if (nextStep === true){
                        game(10, secondStep, bigPrize*3, middlePrize*3, smallPrize*3);
                        attempt = 0

                    }
                }
                else {
                    if (attempt<3) {
                        attempt++;
                        alert('Thank you for a game. Your prize is 0');
                        game()
                    }
                    else if(attempt === 3){
                        beginGameQuestion();
                        attempt = 0
                    }
                }
            }
        }
        game(5, firstStep, bigPrize, middlePrize, smallPrize)
    }
}
beginGameQuestion();


