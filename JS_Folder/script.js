// CALLING HTML ELEMENTS ---------------------------------------------
const switchWarning = document.getElementById('startWarning');
const gameStartButton = document.getElementById('gameStart');

const fatherTower1 = document.getElementById('fatherTower1');
    const tower1 = document.getElementById('tower1');

const fatherTower2 = document.getElementById('fatherTower2');
    const tower2 = document.getElementById('tower2');

const fatherTower3 = document.getElementById('fatherTower3');
    const tower3 = document.getElementById('tower3');
// -------------------------------------------------------------------
// GAME MODULES ------------------------------------------------------
let diskNumber = 3;
let currentDiskQuantity = 0;

const createDisk = (targetTower, position) => {
    let newDisk = document.createElement('div');

    switch (position) {
        case 0:
            newDisk.setAttribute('id', `disk${position}`);
            newDisk.style.background = `rgb(100, 150, 200)`;
            newDisk.style.border = '1px solid var(--colorOne)';

            newDisk.style.width = '40px';
            newDisk.style.height = '20px';
            newDisk.style.borderRadius = '10px';
            break;
        case 1:
            newDisk.setAttribute('id', `disk${position}`);
            newDisk.style.background = `rgb(50, 100, 150)`;
            newDisk.style.border = '1px solid var(--colorOne)';

            newDisk.style.width = '60px';
            newDisk.style.height = '20px';
            newDisk.style.borderRadius = '10px';
            break;
        case 2:
            newDisk.setAttribute('id', `disk${position}`);
            newDisk.style.background = `rgb(0, 50, 100)`;
            newDisk.style.border = '1px solid var(--colorOne)';

            newDisk.style.width = '80px';
            newDisk.style.height = '20px';
            newDisk.style.borderRadius = '10px';
            break;
        case 3:
            newDisk.setAttribute('id', `disk${position}`);
            newDisk.style.background = `rgb(0, 0, 50)`;
            newDisk.style.border = '1px solid var(--colorOne)';

            newDisk.style.width = '100px';
            newDisk.style.height = '20px';
            newDisk.style.borderRadius = '10px';
            newDisk.style.marginBottom = '10px';
            break;
    }
    targetTower.append(newDisk);
    currentDiskQuantity ++;
};

const destroyDisk = (targetDisk) => {
    let destroyed = document.getElementById(`disk${targetDisk}`);
    destroyed.remove();
    currentDiskQuantity --;
};

createDisk(fatherTower1, currentDiskQuantity)
createDisk(fatherTower1, currentDiskQuantity)
createDisk(fatherTower1, currentDiskQuantity)
createDisk(fatherTower1, currentDiskQuantity)

// -------------------------------------------------------------------