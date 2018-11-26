function findGCD(a, b) {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}



let gcd = findGCD(5, 125);



console.log(gcd);