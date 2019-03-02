const getRandomNumbers = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const table = {
    minusFifty: [2, 3, 4, 5, 6],
    zero: [7, 8, 9],
    plusFifty: [10],
    plusOne: [11],
    plusOneFifty: [12],
};

const currencyTable = {
    minusFifty: -0.50,
    zero: +0,
    plusFifty: +0.50,
    plusOne: +1.00,
    plusOneFifty: +1.50,
};

const numberOfRoles = 1000;
const initialValue = +0.50;

const amountSpent = initialValue * numberOfRoles;

const result = [];

const calculateDiceProbability = () => {

    let finalValue = 0;

    const dice1 = getRandomNumbers(1, 6);
    const dice2 = getRandomNumbers(1, 6);

    const sum = dice1 + dice2;

    Object.keys(table).forEach((key) => {
        if (table[key].includes(sum)) {
            finalValue = initialValue + currencyTable[key];
        }
    });

    result.push(finalValue);
    return finalValue;
};

for (let i = 0; i < numberOfRoles; i++) {
    calculateDiceProbability();
}

const finalAmount = result.reduce((a, b) => a + b, 0);

const doIWin = () => {
    return !amountSpent > finalAmount;
};

console.log(doIWin());

