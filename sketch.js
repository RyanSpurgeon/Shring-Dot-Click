// P5.JS TEMPLATE
let x = 100,
    start, gamestarted, score = 0,
    changeMNLT = 0;
let highScore = 0;
let diffi = "EASY"
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
    initialize()
    start = frameCount
    dots = [];
    gameState = "START"
    gamestarted = "false"
    noCursor()
    background(0)
    noFill()
    stroke(255)
    strokeWeight(10)
    rect(50, 50, width - 100, height - 100)
    changeMNLT = 0.25

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0)
    noFill()
    stroke(255)
    strokeWeight(10)
    rect(50, 50, width - 100, height - 100)
    updateDOT();
    initialize()
    Score()
    highScoreData()
    gameStates()
    lives()
    if (gameState == "START") {
        gameSetup()
    }
    fill("white")
    ellipse(mouseX, mouseY, 10)
}
//add event function mouse pressed

function updateDOT() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].move(changeMNLT);
        dots[i].show();

    }
    console.log(dots.length);
}


function mouseClicked() {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].clicked()) {
            dots.splice(i, 1);
        }
    }


}




function initialize() {
    if (gamestarted == "true") {
        if (mouseX > 50 && mouseX < width - 50 && mouseY < height - 50 && mouseY > 50) {
            gameState = "PLAY"
        } else {

            gameState = "PAUSE"
        }
    }
}



function Score() {

    fill("white")
    noStroke()
    textSize(36)
    textStyle(BOLD);
    if (score < 10) {
        text("SCORE:00000" + score, 13, 34)
    } else if (score < 100) {
        text("SCORE:0000" + score, 13, 34)
    } else if (score < 1000) {
        text("SCORE:000" + score, 13, 34)
    } else if (score < 10000) {
        text("SCORE:00" + score, 13, 34)
    } else if (score < 100000) {
        text("SCORE:0" + score, 13, 34)
    } else if (score < 999999) {
        text("SCORE:" + score, 13, 34)
    } else {
        text("SCORE:999999", 13, 34)
    }

    text(gameState, 13, height - 10)

}

function gameSetup() {
    if (gameState == "START") {
        setup()
        noStroke()
        fill("white")
        textSize(90)
        text("DOTS DOTT", 150, 200)
        textSize(15)
        if (mouseX > 327 && mouseX < 450 && mouseY < 350 && mouseY > 250) {
            text("CLICK TO", 327, 300)
        }
        text("START", 400, 300)
        stroke(4)
        stroke("white")
        noFill()
        rect(320, 275, 140, 50)


        //DIFFICULTY SELECT
        if (diffi == "EASY") {
            strokeWeight(20)
            rect(180, 400, 100, 100)
        }

        if (diffi == "MED") {
            strokeWeight(20)
            rect(343, 400, 100, 100)
        }
        if (diffi == "HARD") {
            strokeWeight(20)
            rect(500, 400, 100, 100)
        }
        textSize(85)
        noStroke()
        fill("white")
        text(" E    M    H", 180, 480)

        //diificulty select
        if (mouseX > 180 && mouseX < 280 && mouseY > 400 && mouseY < 500 && mouseIsPressed) {

            diffi = "EASY"
        } else if (mouseX > 343 && mouseX < 443 && mouseY > 400 && mouseY < 500 && mouseIsPressed) {

            diffi = "MED"
        } else if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 500 && mouseIsPressed) {

            diffi = "HARD"
        }







        if (mouseX > 327 && mouseX < 450 && mouseY < 350 && mouseY > 250 && mouseIsPressed) {
            gameState = "PLAY"
            Difficulty()
        }
    }
}



function Difficulty() {
    if (diffi == "EASY") {
        lifes = 3
    } else if (diffi == "MED") {
        lifes = 2
    } else if (diffi == "HARD") {
        lifes = 1
    }
}

function gameStates() {
    if (gameState == "START") {
        lifes = 3
        score = 0
        gameSetup()
    } else if (gameState == "PLAY") {
        gamestarted = "true"
        levels()
    } else if (gameState == "END") {
        gameOver()
    } else if (gameState == "PAUSE") {
        changeMNLT = 0
    }
}

function gameOver() {
    changeMNLT = 200
    if (score >= highScore) {
        highScore = score
        textSize(50)
        text("YOU'VE BEATEN YOUR", 140, 250)
        text("SCORE", 320, 300)
        text("TRY AGAIN", 280, 470)
        noFill()
        stroke("white")
        rect(width / 3, height / 1.5, 300, 100)
    } else if (score < highScore) {
        noStroke()
        textSize(50)
        text("YOU SCORED LOWER", 150, 300)
        text("TRY AGAIN", 280, 470)
        noFill()
        stroke("white")
        rect(width / 3, height / 1.5, 300, 100)

    }
    if (mouseX > width / 3 && mouseX < width / 3 + 300 && mouseY > height / 1.5 && mouseY < height / 1.5 + 100 && mouseIsPressed) {
        gameState = "START"
        gameStates()
    }
}

function highScoreData() {


    fill("white")
    noStroke()
    textSize(36)
    if (highScore < 10) {
        text("HIGHSCORE:00000" + highScore, 430, 34)
    } else if (highScore < 100) {
        text("HIGHSCORE:0000" + highScore, 430, 34)
    } else if (highScore < 1000) {
        text("HIGHSCORE:000" + highScore, 430, 34)
    } else if (highScore < 10000) {
        text("HIGHSCORE:00" + highScore, 430, 34)
    } else if (highScore < 100000) {
        text("HIGHSCORE:0" + highScore, 430, 34)
    } else if (highScore < 999999) {
        text("HIGHSCORE:" + highScore, 430, 34)
    } else {
        text("HIGHSCORE:999999", 430, 34)
    }

}

function levels() {
    if (score < 1000) {

        changeMNLT = 0.25
        if (frameCount % 120 === 0) {
            dots.push(new DOT());
        }

    } else if (score < 2000) {
        changeMNLT = 0.5
        if (frameCount % 110 === 0) {
            dots.push(new DOT());
        }
    } else if (score < 3000) {
        changeMNLT = 0.75
        if (frameCount % 100 === 0) {
            dots.push(new DOT());
        }
    } else if (score < 4000) {
        changeMNLT = 1
        if (frameCount % 90 === 0) {
            dots.push(new DOT());
        }
    } else if (score < 5000) {
        changeMNLT = 1.25
        if (frameCount % 80 === 0) {
            dots.push(new DOT());
        }
    } else if (score < 10000) {
        changeMNLT = 1.5
        if (frameCount % 80 === 0) {
            dots.push(new DOT());
            dots.push(new DOT());
        }
    } else if (score < 20000) {
        changeMNLT = 1.75
        if (frameCount % 60 === 0) {
            dots.push(new DOT());
            dots.push(new DOT());
        }
    } else if (score < 30000) {
        changeMNLT = 2
        if (frameCount % 60 === 0) {
            dots.push(new DOT());
            dots.push(new DOT());
        }
    } else if (score < 50000) {
        changeMNLT = 2.25
        if (frameCount % 60 === 0) {
            dots.push(new DOT());
            dots.push(new DOT());
        }
    } else if (score > 50000) {
        changeMNLT = 2.4
        if (frameCount % 60 === 0) {
            dots.push(new DOT());
            dots.push(new DOT());
            dots.push(new DOT());
        }
    }
}


function lives() {
    if (lifes == 3) {
        rect(610, 560, 30, 30)
        rect(650, 560, 30, 30)
        rect(690, 560, 30, 30)
    } else if (lifes == 2) {
        rect(650, 560, 30, 30)
        rect(690, 560, 30, 30)
    } else if (lifes == 1) {
        rect(690, 560, 30, 30)
    } else {
        gameState = "END"
        gamestarted = "false"
    }
}
