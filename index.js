function isNumberGreaterThan10(num) {

    return new Promise(function (resolve, reject) {

        if (num > 10) {
            setTimeout(resolve(`${num} true`), 500); // fulfilled successfully
        } else {
            reject(`${num} false`); // error, rejected
        }

    })
};

const numbersArr = [2, 3, 5, 8, 10, 11, 15, 9];

numbersArr.forEach(element => {
    isNumberGreaterThan10(element)
        .then(res => console.log(res))
        .catch(err => console.log(err));
});