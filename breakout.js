const grid = document.querySelector('.grid')
// const score = document.querySelector('#score')
const blockWidth = 100
const blockHeight = 20
const boardWidth = 1200
const ballDiameter = 20
const boardHeight = 300

let xDirection = 2
let yDirection = 2
let timerId

const userStartPoint = [550, 10]
let currentPosition = userStartPoint

const ballStartPosition = [590, 32]
let ballCurrentPosition = ballStartPosition

//draw block

//  the bottom-left point of the block is used and anchor to map out the other points of the block
// whatever gets passed into the constructor is the bottom-left point
class drawBlock {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

//all my blocks

const allBlocks = [
    new drawBlock(0, 270),
    new drawBlock(110, 270),
    new drawBlock(220, 270),
    new drawBlock(330, 270),
    new drawBlock(440, 270),
    new drawBlock(550, 270),
    new drawBlock(660, 270),
    new drawBlock(770, 270),
    new drawBlock(880, 270),
    new drawBlock(990, 270),
    new drawBlock(1100, 270),
    new drawBlock(0, 240),
    new drawBlock(110, 240),
    new drawBlock(220, 240),
    new drawBlock(330, 240),
    new drawBlock(440, 240),
    new drawBlock(550, 240),
    new drawBlock(660, 240),
    new drawBlock(770, 240),
    new drawBlock(880, 240),
    new drawBlock(990, 240),
    new drawBlock(1100, 240),
    new drawBlock(0, 210),
    new drawBlock(110, 210),
    new drawBlock(220, 210),
    new drawBlock(330, 210),
    new drawBlock(440, 210),
    new drawBlock(550, 210),
    new drawBlock(660, 210),
    new drawBlock(770, 210),
    new drawBlock(880, 210),
    new drawBlock(990, 210),
    new drawBlock(1100, 210),


]

//create block
addNewBlocks = () => {
    for (let i = 0; i < allBlocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = allBlocks[i].bottomLeft[0] + 'px'
        block.style.bottom = allBlocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)
    }

}

addNewBlocks()

//draw user block
drawUser = () => {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}
// draw ball
drawBall = () => {
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
}




// add user
const user = document.createElement('div')
user.classList.add('user')
drawUser()
grid.appendChild(user)



//controls

moveUser = (e) => {
    switch (e.key) {                        //listens out for keys
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10
                drawUser();

            }
            break;
        case "ArrowRight":
            if (currentPosition[0] < boardWidth - blockWidth) {
                currentPosition[0] += 10
                drawUser()
            }
            break


    }
}

document.addEventListener('keydown', moveUser)  //listens for when a key is pressed and moves the user on the xaxis

// add ball

const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

//ball movement

moveBall = () => {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}

timerId = setInterval(moveBall, 30)

//score display
const score = document.createElement('div')
score.setAttribute('id', 'score')
score.innerHTML = 0
document.body.appendChild(score)

checkForCollisions = () => {
    //checks for collision against grid
    if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
        ballCurrentPosition[1] >= (boardHeight - ballDiameter)||
        ballCurrentPosition[0] <= 0) {
        changeDirection()
    }
    // check for game over
    if(ballCurrentPosition[1] <=0){
        clearInterval(timerId)
        score.innerHTML += ' - Game Over'
    }
}

changeDirection = () => {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }
}