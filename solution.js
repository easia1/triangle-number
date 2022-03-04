// 1. Identify triangle number
// - loop through numbers indefinitely break once count is greater than number specified
// - calculate triangle factor using formula

// 2. Identify factors of each triangle number
// - loop through numbers less than or eq to the sqrt of the triangle number

// 3. Count factors of each triangle number
// - if (number % factor === 0) then plus 2 sa count
// - if (factor === sqrt(number)) then plus 1 sa count (meaning whole number s'ya)

// para reusable for other number of divisors
function triangleNo(divisorNo) {
    var n = 1;
    var startLoop = true;

    while (startLoop) {
        // triangle number
        let triNo = (n * (n + 1)) / 2;
        let divisorCount = 0;

        for (let i = 1; i <= Math.sqrt(triNo); i++) {
            if (i === Math.sqrt(triNo)) {
                divisorCount++; // if perfect square, count only 1
            } else if (triNo % i === 0) {
                divisorCount += 2; // include corresponding pair factor
            }
        }

        if (divisorCount > divisorNo) {
            console.log('Answer is: ' + triNo);
            startLoop = false; // stop the while loop
        }

        n++;
    }
}

triangleNo(500);
