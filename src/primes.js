function smallestCommons(arr) {
    const start = Math.min(...arr);
    const end = Math.max(...arr);

    // Generate sequence start to end
    let arrSeq = Array.from({ length: (end - start) + 1 }, (_, i) => start + (i * 1)).filter(n => n > 1);
    let primesFactors = arrSeq.map(number => primeFactorizarion(number));

    let lcm = primesFactors.reduce((acc, arrN) => {
        Object.keys(arrN).map(key => {
            if (!acc.hasOwnProperty(key)) {
                acc[key] = arrN[key];
            } else {
                if (acc[key] < arrN[key]) {
                    acc[key] = arrN[key]
                }
            }
        });
        return acc;
    }, {});

    return Object.entries(lcm).reduce((x, curr) => {
        return x *= (parseInt(curr[0]) ** parseInt(curr[1]));
    }, 1);

    function primeFactorizarion(number) {
        const primes = [2, 3, 5, 7, 11];
        //let arrP = [];
        //let arrobj = [];
        let obj = {

        };

        let init = 0;

        do {

            if (number % primes[init] === 0) {
                number /= primes[init];
                //arrobj.push(obj);
                //arrP.push(primes[init]);
                obj[primes[init]] = (obj[primes[init]] || 0) + 1;
            } else {
                init++;
            }
        } while (init < primes.length);

        if (number > 1) {
            obj[number] = 1;
            //arrobj.push({ number });
            //arrP.push(number);
            //number /= number;
        }
        return obj;
    }
}


console.log(smallestCommons([1, 180000]));
