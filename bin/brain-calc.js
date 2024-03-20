import greeting from '../src/cli.js';

greeting();

  export const description = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  const minRange = 0;
  const maxRange = 50;

  console.log(description);

  export function calculate (x, y, operator) {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`There is no such operator like '${operator}'!`);
  }
};
export default operators; minRange; maxRange

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (data) => Math.floor(Math.random() * data.length);

export const generateRound = () => {
    const number1 = getRandomNumber(minRange, maxRange);
    const number2 = getRandomNumber(minRange, maxRange);
    const operator = operators[getRandomIndex(operators)];
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = calculate(number1, number2, operator).toString();
    return [question, correctAnswer];
  };
  

 

