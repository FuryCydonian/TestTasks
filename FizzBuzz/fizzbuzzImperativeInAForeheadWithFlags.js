// Решение FizzBuzz в императивном стиле с использвание флагов

function isFizz(n) {
    if (n % 3 === 0) {
        return true;
    }
    return false;
}

function isBuzz(n) {
    if (n % 5 === 0) {
        return true;
    }
    return false;
}

function isFizzBuzz(n) {
    if (isBuzz(n) && isFizz(n)) {
        return true;
    }
    return false;
}

for (let i = 1; i <= 100; i++) {
    switch(true) {
        case isFizzBuzz(i):
            console.log("FizzBuzz");
            break;
        case isBuzz(i):
            console.log("Buzz");
            break;
        case isFizz(i):
            console.log("Fizz");
            break;
        default:
            console.log(i);
    }
}