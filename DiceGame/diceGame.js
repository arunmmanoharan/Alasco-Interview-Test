/**
 * Gets a random number between 1-6
 * @param min
 * @param max
 * @returns {*}
 */
const getRandomNumbers = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Initial mapping table for values
 * @type {{zero: number[], minusFifty: number[], plusOne: number[], plusOneFifty: number[], plusFifty: number[]}}
 */
const table = {
    minusFifty: [2, 3, 4, 5, 6],
    zero: [7, 8, 9],
    plusFifty: [10],
    plusOne: [11],
    plusOneFifty: [12],
};

/**
 * Mapping table for values to characters
 * @type {{zero: number, minusFifty: number, plusOne: number, plusOneFifty: number, plusFifty: number}}
 */
const currencyTable = {
    minusFifty: -0.50,
    zero: +0,
    plusFifty: +0.50,
    plusOne: +1.00,
    plusOneFifty: +1.50,
};

/**
 * Number of iteration/roles to be done using two dice
 * @type {number}
 */
const numberOfRoles = 1000;

/**
 * Initial value spent
 * @type {number}
 */
const initialValue = +0.50;

/**
 * Total amount to be spent at the end
 * @type {number}
 */
const amountSpent = initialValue * numberOfRoles;

const result = [];

/**
 * Calculating value after n iterations
 * @returns {number}
 */
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

/**
 * Run function for given n times and calculate total value at end
 */
for (let i = 0; i < numberOfRoles; i++) {
    calculateDiceProbability();
}

const finalAmount = result.reduce((a, b) => a + b, 0);

/**
 * Compare money spent and money received through game
 * Calculates Profit or Loss
 * Not a wise decision to play this game as returns to false always i.e., you lose money
 * @returns {boolean}
 */
const doIWin = () => {
    return !amountSpent > finalAmount;
};

console.log(doIWin());

