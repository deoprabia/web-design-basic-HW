


function GetRandom(max) {

    return Math.floor(Math.random() * (max+1));
}






function randomizeCharacters(inputStr) {

    let chars = Array.from(inputStr);

    let charsLength = chars.length;

    let result = ` `;





    for (let index = 0; index<charsLength; index++) {

        result += chars[GetRandom(index)];
    }

    return result;

}





let input = "Max Muster";
let result = randomizeCharacters(input);
console.log(result);