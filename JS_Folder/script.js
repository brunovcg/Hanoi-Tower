// CALLING HTML ELEMENTS ---------------------------------------------
const switchWarning = document.getElementById('startWarning');
const gameStartButton = document.getElementById('gameStart');
const gameScoreAndMovesCounter = document.getElementById('scoreAndMovesCount');

const fatherTower1 = document.getElementById('fatherTower1');
    const tower1 = document.getElementById('tower1');

const fatherTower2 = document.getElementById('fatherTower2');
    const tower2 = document.getElementById('tower2');

const fatherTower3 = document.getElementById('fatherTower3');
    const tower3 = document.getElementById('tower3');
// -------------------------------------------------------------------
// GAME MODULES ------------------------------------------------------

let lastDivTower1;
let lastDivTower2;
let lastDivTower3;

let firstDivTower1;
let firstDivTower2;
let firstDivTower3;

let itsAWin = false;

const createTowers = () => {
    let counter = 1;

    while (counter <= 3) {
        let newTower = document.createElement('div');
        newTower.setAttribute('id', `tower${counter}`)
        newTower.classList.add('towers');

        document.getElementById(`fatherTower${counter}`).appendChild(newTower);
        counter ++;
    };
};
createTowers();

const createDisk = (targetTowerNumber, position) => {
    const targetTower = document.getElementById(`fatherTower${targetTowerNumber}`);
    let newDisk = document.createElement('div');

    switch (position) {
        case 1:
            newDisk.style.background = `rgb(100, 150, 200)`;
            newDisk.style.border = '1px solid var(--colorOne)';

            newDisk.style.width = '120px';
            newDisk.style.height = '20px';
            newDisk.style.borderRadius = '10px';
            
            break;
        case 2:
            newDisk.style.background = `rgb(50, 100, 150)`;
            newDisk.style.border = '1px solid var(--colorOne)';

            newDisk.style.width = '100px';
            newDisk.style.height = '20px';
            newDisk.style.borderRadius = '10px';
            
            break;
        case 3:
            newDisk.style.background = `rgb(0, 50, 100)`;
            newDisk.style.border = '1px solid var(--colorOne)';

            newDisk.style.width = '80px';
            newDisk.style.height = '20px';
            newDisk.style.borderRadius = '10px';
            
            break;
        case 4:
            newDisk.style.background = `rgb(0, 0, 50)`;
            newDisk.style.border = '1px solid var(--colorOne)';

            newDisk.style.width = '60px';
            newDisk.style.height = '20px';
            newDisk.style.borderRadius = '10px';

            break;
        case 5:
            newDisk.style.background = `rgb(0, 0, 0)`;
            newDisk.style.border = '1px solid var(--colorOne)';

            newDisk.style.width = '40px';
            newDisk.style.height = '20px';
            newDisk.style.borderRadius = '10px';

            break;
    }
    
    newDisk.setAttribute('id', `disk_in_tower${targetTowerNumber}_in_position_${position}`);
    targetTower.insertBefore(newDisk, targetTower.firstChild);
    
    switch (targetTowerNumber) {
        case 1:
            lastDivTower1 = fatherTower1.children[fatherTower1.children.length - 2];
            firstDivTower1 = fatherTower1.children[0];
            if (lastDivTower1 !== null) {
                lastDivTower1.style.marginBottom = '10px';
            };
            break;
        case 2:
            lastDivTower2 = fatherTower2.children[fatherTower2.children.length - 2];
            firstDivTower2 = fatherTower2.children[0];
            if (lastDivTower2 !== null) {
                lastDivTower2.style.marginBottom = '10px';
            };
            break;
        case 3:
            lastDivTower3 = fatherTower3.children[fatherTower3.children.length - 2];
            firstDivTower3 = fatherTower3.children[0];
            if (lastDivTower3 !== null) {
                lastDivTower3.style.marginBottom = '10px';
            };
            break;
    };
};

const destroyDisk = (targetTowerNumber, position) => {
    let destroyed = document.getElementById(`disk_in_tower${targetTowerNumber}_in_position_${position}`);
    if (destroyed !== null) {
        destroyed.remove();
    }

    
    switch (targetTowerNumber) {
        case 1:
            lastDivTower1 = fatherTower1.children[fatherTower1.children.length - 2];
            firstDivTower1 = fatherTower1.children[0];
            if (lastDivTower1 !== null) {
                lastDivTower1.style.marginBottom = '10px';
            };
            break;
        case 2:
            lastDivTower2 = fatherTower2.children[fatherTower2.children.length - 2];
            firstDivTower2 = fatherTower2.children[0];
            if (lastDivTower2 !== null) {
                lastDivTower2.style.marginBottom = '10px';
            };
            break;
        case 3:
            lastDivTower3 = fatherTower3.children[fatherTower3.children.length - 2];
            firstDivTower3 = fatherTower3.children[0];
            if (lastDivTower3 !== null) {
                lastDivTower3.style.marginBottom = '10px';
            };
            break;
    };
};

// createDisk(1, 1)
// createDisk(1, 2)
// createDisk(1, 3)
// createDisk(1, 4)
// createDisk(1, 5)

// createDisk(2, 1)
// createDisk(2, 2)
// createDisk(2, 3)
// createDisk(2, 4)
// createDisk(2, 5)

// createDisk(3, 1)
// createDisk(3, 2)
// createDisk(3, 3)
// createDisk(3, 4)
// createDisk(3, 5)


const startTimer = () => {
    let timer = 0;
    let gameTiming = setInterval(() => {timer ++; gameScoreAndMovesCounter.innerHTML = `Timing: ${timer}s<br>Moves: 00`; if (itsAWin) {clearInterval(gameTiming)}}, 1000);
};

// -------------------------------------------------------------------