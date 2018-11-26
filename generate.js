function generateBetween(min,max){
 
    let randomNumber=Math.random(); 
    randomNumber=randomNumber*(max-min);
    randomNumber=Math.floor(randomNumber)+min;
     
    return randomNumber; 
    }
    
    
    
    // test fonksiyonu
    let min = 4
    let max = 9
    let randomNumber = generateBetween(min, max);
    console.log(randomNumber); // 7