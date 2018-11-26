//function findHoroscope(.......
//  .....
//}

// test fonksiyonu
// let month = 3;
//let day = 12;
//let myHoroscope = findHoroscope(month, day);
//console.log(horoscope); // "Balik" 


function findHoroscope(gun, ay) {



    if ((ay == 1 && gun > 20) || (ay == 2 && gun < 20)) {
        horoscope = "KOVA";
    } else if ((ay == 2 && gun > 18) || (ay == 3 && gun < 21)) {
        horoscope = "BALIK";
    } else if ((ay == 3 && gun > 20) || (ay == 4 && gun < 21)) {
        horoscope = "KOC";
    } else if ((ay == 4 && gun > 20) || (ay == 5 && gun < 22)) {
        horoscope = "BOGA";
    } else if ((ay == 5 && gun > 21) || (ay == 6 && gun < 22)) {
        horoscope = "IKIZLER";
    } else if ((ay == 6 && gun > 21) || (ay == 7 && gun < 24)) {
        horoscope = "YENGEC";
    } else if ((ay == 7 && gun > 23) || (ay == 8 && gun < 24)) {
        horoscope = "ASLAN";
    } else if ((ay == 8 && gun > 23) || (ay == 9 && gun < 24)) {
        horoscope = "BASAK";
    } else if ((ay == 9 && gun > 23) || (ay == 10 && gun < 24)) {
        horoscope = "TERAZI";
    } else if ((ay == 10 && gun > 23) || (ay == 11 && gun < 23)) {
        horoscope = "AKREP";
    } else if ((ay == 11 && gun > 22) || (ay == 12 && gun < 23)) {
        horoscope = "YAY";
    } else if ((ay == 12 && gun > 22) || (ay == 1 && gun < 21)) {
        horoscope = "OGLAK";
    } else {
        horoscope = "notfound";
    }
    return ("your horoscope:", horoscope);


}



let ay = 3;
let gun = 12;
let myHoroscope = findHoroscope(gun, ay);
console.log(horoscope);