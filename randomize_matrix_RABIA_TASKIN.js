





// random sayi veren fonksyion 0 ile maxnumber-1 arasi
function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * (maxNumber ));
}

// matrix icindeki sayilari bir arraya atan fonksiyon
function flatten(inputMatrix) {
    let newArray = []; // yeni array deklare ettik
    for (let i = 0; i < inputMatrix.length; i++) {
        for (let j = 0; j < inputMatrix[i].length; j++) {
            newArray.push(inputMatrix[i][j]);
        } // her kutucuk   
    }
    return newArray;
}


function randomizeMatrix(inputMatrix) {
    for (let row = 0; row < inputMatrix.length; row++) {
        for (let column = 0; column < inputMatrix[row].length; column++) {
            // rastgele kutucuk koordinatlarini buluyoruz
            let rowIndex = getRandomNumber(inputMatrix.length);
            let colIndex = getRandomNumber(inputMatrix[row].length);

           // mevcut kutucuk ile rastgele kutucuk arasinda eleman degisimi
           // iki bardak arasinda icerik degisimi yapmak icin ucuncu bir bardaga ihtiyac var
           
           // rastgele kutucuk icerigini ucuncu bardaga atiyoruz 
           let temp = inputMatrix[rowIndex][colIndex]; // ucuncu bardak gibi 
           //rastgele kutucugun icine mevcut kutunun icerigini aktariyoruz
            inputMatrix[rowIndex][colIndex] = inputMatrix[row][column];
           // mevcut kutu icine de rastgele kutu icerigini atiyoruz
            inputMatrix[row][column] = temp;
        }
    }
    return inputMatrix;
}

let matrix = [
    [1, 5, -1],
    [2, 6, -2],
    [3, 7, 9],
    [4, 8, -5],
    [2, 3, 4]
];
let randomizedMatrix = randomizeMatrix(matrix);
console.log(matrix);
console.log(randomizeMatrix(matrix));
console.log(randomizeMatrix(matrix));
console.log(randomizeMatrix(matrix));