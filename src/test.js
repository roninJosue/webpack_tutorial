function steamrollArray(arr) {
    let res = [];

    const recursive = (arr) => {
        arr.forEach((el) => {
            Array.isArray(el) ? recursive(el) : res.push(el);
        })
    }
    recursive(arr);

    return res;
}

console.log(steamrollArray([1, [2, [10,[9,[20]]]], {name:'re'}, [3, [[4], 5,[7]]]]));