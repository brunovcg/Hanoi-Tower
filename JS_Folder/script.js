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
let gameTiming = ""


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


const startTimer = () => {
    let timer = 0;
    gameTiming = setInterval(() => {timer ++; gameScoreAndMovesCounter.innerHTML = `Timing: ${timer}s<br>Moves: ${counter}`; if (itsAWin) {clearInterval(gameTiming)}}, 1000);
};


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


// BRUNO----------------------------------------------------
document.getElementById("gameStart").onclick = function() { 

    startTimer()
    createTowers()
 
    
    createDisk(1, 1)
    createDisk(1, 2)
    createDisk(1, 3)
    createDisk(1, 4)
    createDisk(1, 5)

   let resetPopUp = document.getElementById("popUpWin")
   resetPopUp.style.display = "none"

   itsAWin = false
}


let action = "get";
let currentTower = "1";
let currentDisk = "5";
let counter = 0;


fatherTower1.onclick = function() {

    let father = document.getElementById("fatherTower1");

    let firstChild = father.firstElementChild.id
    
    let tower = father.id[11];

    let choice = document.getElementById(firstChild)

    let thisFatherLastDisk = father.firstElementChild.id[27]
   
    
    if(action == "get") {

        if (father.childElementCount > 1) {

            choice.style.border = "1px red solid"
            choice.style.marginBottom = "15px"
        
            action = "pass"

            currentTower = tower
            currentDisk = father.firstElementChild.id[27];

            counter ++

        } else {counter ++}


    } else {
        
        if (tower == currentTower) {
            destroyDisk(currentTower, Number(currentDisk))
            createDisk(currentTower,Number(currentDisk))

            action = "get"

            counter ++

        } else if (father.childElementCount == 1) {

            destroyDisk(currentTower, Number(currentDisk))
            createDisk(tower,Number(currentDisk))

            action = "get"

            counter ++

        } else if (father.childElementCount > 1 && Number(currentDisk) > Number(thisFatherLastDisk)) {

            destroyDisk(currentTower, Number(currentDisk))
            createDisk(tower,Number(currentDisk))

            action = "get"

            counter ++
            
        } else {        

            destroyDisk(currentTower, Number(currentDisk))
            createDisk(currentTower,Number(currentDisk))

            action = "get"

            counter ++

        }
    }
}


fatherTower2.onclick = function() {

    let father = document.getElementById("fatherTower2");

    let firstChild = father.firstElementChild.id
    
    let tower = father.id[11];

    let choice = document.getElementById(firstChild)

    let thisFatherLastDisk = father.firstElementChild.id[27]
   
    
    if(action == "get") {

        if (father.childElementCount > 1) {

            choice.style.border = "1px red solid"
            choice.style.marginBottom = "15px"
        
            action = "pass"

            currentTower = tower
            currentDisk = father.firstElementChild.id[27];

            counter ++

        } else {counter ++}


    } else {

        
        if (tower == currentTower) {
            destroyDisk(currentTower, Number(currentDisk))
            createDisk(currentTower,Number(currentDisk))

            action = "get"

            counter ++

        } else if (father.childElementCount == 1) {

            destroyDisk(currentTower, Number(currentDisk))
            createDisk(tower,Number(currentDisk))

            action = "get"

            counter ++


        } else if (father.childElementCount > 1 && Number(currentDisk) > Number(thisFatherLastDisk)) {

            destroyDisk(currentTower, Number(currentDisk))
            createDisk(tower,Number(currentDisk))

            action = "get"

            counter ++
            

        } else {        

            destroyDisk(currentTower, Number(currentDisk))
            createDisk(currentTower,Number(currentDisk))

            action = "get"

            counter ++
        }
    }
}


fatherTower3.onclick = function() {

    let father = document.getElementById("fatherTower3");

    let firstChild = father.firstElementChild.id
    
    let tower = father.id[11];

    let choice = document.getElementById(firstChild)

    let thisFatherLastDisk = father.firstElementChild.id[27]
   
    
    if(action == "get") {

        if (father.childElementCount > 1) {

            choice.style.border = "1px red solid"
            choice.style.marginBottom = "15px"
        
            action = "pass"

            currentTower = tower
            currentDisk = father.firstElementChild.id[27];

            counter ++

        } else {counter ++}


    } else {
 
        if (tower == currentTower) {
            destroyDisk(currentTower, Number(currentDisk))
            createDisk(currentTower,Number(currentDisk))

            action = "get"

            counter ++

        } else if (father.childElementCount == 1) {

            destroyDisk(currentTower, Number(currentDisk))
            createDisk(tower,Number(currentDisk))

            action = "get"

            counter ++

        } else if (father.childElementCount > 1 && Number(currentDisk) > Number(thisFatherLastDisk)) {

            destroyDisk(currentTower, Number(currentDisk))
            createDisk(tower,Number(currentDisk))

            action = "get"

            counter ++

            let checkVictory = fatherTower3.childElementCount
            if (checkVictory >= 6){
                console.log("You Win")
                victory()
                itsAWin = true
                          
            }

        } else {        

            destroyDisk(currentTower, Number(currentDisk))
            createDisk(currentTower,Number(currentDisk))

            action = "get"

            counter ++
        }
    }
}

function victory() {
let span = document.getElementById("winMsg")
span.innerHTML =  `You took  ${counter}  moves and ${gameTiming} seconds`

let resetPopUp = document.getElementById("popUpWin")
resetPopUp.style.display = "flex"}
