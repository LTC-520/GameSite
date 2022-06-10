const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

//draw block

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
console.log(allBlocks[0])
//create block

createNewBlock = () => {
    for (let i = 0; i < allBlocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = allBlocks[i].bottomLeft[0] + 'px'
        block.style.bottom = allBlocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)
    }

}

createNewBlock()