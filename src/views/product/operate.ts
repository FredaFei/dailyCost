import Big from 'big.js';

export default function (numberOne: string, numberTwo: string, operation: string) {
  const one = Big(numberOne || '0');
  const two = Big(numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0'));
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    // @ts-ignore
    if (two === '0') {
      return '0';
    }
    return one.div(two).toString();
  }
  throw Error(`unKnown operation ${operation}`);
}