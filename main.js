export function sumDivisibles (int) {
    let sumResult = 0;

    for (let i = int - 1; i > 2; i--) {
        if ((i % 3) === 0 || (i % 5) === 0) {
            sumResult += i;
        }
    }

    return sumResult;
}

const result = sumDivisibles(10);

console.log(result);