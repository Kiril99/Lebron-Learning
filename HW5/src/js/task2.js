function beginGameQuestion() {
    var startGame = confirm('Do you want to play a game?');
    if (startGame === false) {
        alert('You did not become a millionaire, but can')
    }
    if (startGame === true) {
        var bigPrize = 10;
        var middlePrize = 5;
        var smallPrize = 3;
        var step = 5;
        var attempt = 1;

        function letsAgainPlay() {
            let againGame = confirm('Do you want to play again?');
            if (againGame === true) {
                attempt = 1;
                game(step, bigPrize, middlePrize, smallPrize, attempt)
            }
            else{
                alert('buy')
            }
        }
        function game(step, bigPrize, middlePrize, smallPrize, attempt) {
            var totalPrize = 0;

            function checkAnswer(prize) {
                let nextStep = confirm('Congratulation! Your prize is ' + prize + '$ Do you want continue?');
                if (nextStep === false) {
                    alert('Thank you for a game. Your prize is:' + prize+ '$');
                    letsAgainPlay()
                }
                else if (nextStep === true) {
                    step = step*2;
                    attempt = 1;
                    game(step, bigPrize * 3, middlePrize * 3, smallPrize +4, attempt);
                }
            }
            if (attempt <= 3) {
                const num = Math.ceil(Math.random() * step);
                alert(num);
                const gnum = prompt(`
                Enter a number from 1 to ${step}
                Attempt: ${attempt}
                Total prize:  ${totalPrize}
                You can to have ${bigPrize}$`);

                if (gnum == num && attempt === 1) {
                    checkAnswer(bigPrize)
                }
                else if (gnum == num && attempt === 2) {
                    checkAnswer(middlePrize)
                }
                else if (gnum == num && attempt === 3) {
                    checkAnswer(smallPrize)
                }
                else if (attempt === 3) {
                    letsAgainPlay()
                }
                else {
                    if (attempt < 3) {
                        attempt = attempt +1;
                        alert(`You lose! You have ${attempt} attempt`);
                        game(step, bigPrize, middlePrize, smallPrize, attempt)
                    }
                }
            }
        }
        game(step, bigPrize, middlePrize, smallPrize, attempt)
    }
}

beginGameQuestion();


