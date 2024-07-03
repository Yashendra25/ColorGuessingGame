document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.getElementsByClassName("box");
    var colors = createcolorsArray();
    var counter = 0;
    var score = 0;
    var isdone = false;

    updateScore();
    resetGame();

    var colorDisplay = document.getElementById("rgb");
    var choosencolor = Math.floor(Math.random() * 6);
    colorDisplay.innerText = colors[choosencolor];

    for (let box of boxes) {
        let bgcolor = colors[counter];
        box.style.backgroundColor = bgcolor;
        box.addEventListener("click", function() {
            console.log(box.id, choosencolor);
            console.log(box.style.backgroundColor, colors[choosencolor]);
            if (parseInt(box.id) === choosencolor && !isdone) {
                alert("Correct answer! Click reset button to play again");
                score++;
                updateScore();
                isdone = true;
            } else {
                if (isdone) {
                    alert("Click on reset to play again");
                } else {
                    alert("Try Again");
                }
            }
        });
        box.id = counter++;
    }

    // Function to create random colors
    function createcolorsArray() {
        let colors = [];
        for (let i = 0; i < 6; i++) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            colors.push(`rgb(${r},${g},${b})`);
        }
        return colors;
    }

    // Function to update the score element
    function updateScore() {
        var scoreElement = document.getElementById("score");
        scoreElement.innerText = score;
    }

    // Function to reset the game
    function resetGame() {
        var resetButton = document.getElementById("reset");
        resetButton.addEventListener("click", function() {
            colors = createcolorsArray();
            counter = 0;
            for (let box of boxes) {
                let bgcolor = colors[counter];
                box.style.backgroundColor = bgcolor;
                box.id = counter++;
            }
            choosencolor = Math.floor(Math.random() * 6);
            colorDisplay.innerText = colors[choosencolor];
            isdone = false;
        });
    }
});
