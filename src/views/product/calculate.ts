import {State, defaultState} from './index';
import Big from 'big.js';
import {isNumber} from 'utils/help';
import operate from './operate';

export default function (options: State, cellName: string) {
  if (cellName === 'AC') {return defaultState;}
  console.log('calculate start ----');
  console.log(options);
  if (isNumber(cellName)) {
    if (cellName === '0' && options.next === '0') {return {};}
    if (options.operation) {
      if (options.next) {
        console.log('second number concat ----');
        console.log({next: options.next + cellName});
        const next = options.next === '0' && cellName === '0' ? cellName :
          options.next === '0' && cellName !== '.' ? cellName : options.next + cellName;
        return {next};
      }
      console.log('second number  ----');
      console.log({next: cellName});
      return {next: cellName};
    }
    if (options.next) {
      const next = options.next === '0' && cellName === '0' ? cellName :
        options.next === '0' && cellName !== '.' ? cellName : options.next + cellName;
      console.log('first number concat ----');
      console.log({next, total: null});
      return {next, total: null};
    }
    console.log('first number ----');
    console.log({next: cellName, total: null});
    return {next: cellName, total: null};
  }
  if (cellName === 'CE') {
    if (options.next) {
      console.log('next step del ----');
      console.log({next: options.next.length === 1 ? null : options.next.substring(0, options.next.length - 1)});

      return {next: options.next.length === 1 ? null : options.next.substring(0, options.next.length - 1)};
    }
    if (options.total) {
      if (options.operation) {
        console.log('operation del ----');
        console.log({next: options.total, operation: null, total: null});
        return {next: options.total, operation: null, total: null};
      }
      return {total: options.total.length === 1 ? null : options.total.substring(0, options.total.length - 1)};
    }
    return {};
  }
  if (cellName === '.') {
    if (options.next) {
      console.log('include .');
      console.log(options.next.includes('.'));
      if (options.next.includes('.')) {return {next: options.next};}
      return {next: options.next + '.'};
    }
    return {next: '0.'};
  }
  if (cellName === '%') {
    if (options.operation && options.next) {
      const result = operate(options.total as string, options.next, options.operation);
      return {
        total: Big(result).div(Big('100')).toString(),
        next: null,
        operation: null
      };
    }
    if (options.next) {
      return {next: Big(options.next).div(Big('100')).toString()};
    }
    if (options.total) {
      return {total: Big(options.total).div(Big('100')).toString()};
    }
    return {};
  }
  if (cellName === '+/-') {
    if (options.next) { return {next: (-1 * parseFloat(options.next)).toString()}; }
    if (options.total) {return {total: (-1 * parseFloat(options.total)).toString()};}
    return {};
  }
  if (cellName === '=') {
    if (options.next && options.operation) {
      return {
        total: operate(options.total as string, options.next, options.operation),
        next: null,
        operation: null
      };
    }
    return {};
  }

  if (!options.next && !options.total) {
    return {};
  }
  // The user hasn't typed a number yet, just save the operation
  if (!options.next) {
    return {operation: cellName};
  }
  if (options.operation) {
    return {
      total: operate(options.total as string, options.next as string, options.operation),
      next: null,
      operation: cellName
    };
  }
  console.log('operation start ----');
  console.log({next: cellName, total: null});
  return {
    total: options.next,
    next: null,
    operation: cellName
  };
}