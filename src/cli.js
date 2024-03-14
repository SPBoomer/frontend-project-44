import _readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = _readlineSync.question('May I have a your name?: ');
  console.log('Hello, ' + name + '!');
  return name;
};
export default greeting;
