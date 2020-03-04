import {State, defaultState} from './index';
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
        return {next: options.next + cellName};
      }
      console.log('second number  ----');
      console.log({next: cellName});
      return {next: cellName};
    }
    if (options.next) {
      const next = options.next === '0' ? cellName : options.next + cellName;
      console.log('first number concat ----');
      console.log({next, total: null});
      return {next, total: null};
    }
    console.log('first number ----');
    console.log({next: cellName, total: null});
    return {next: cellName, total: null};
  }
  if (cellName === '=') {
    if (options.next && options.operation) {
      return {
        total: operate(options.total as string, options.next, options.operation),
        next: null,
        operation: null
      };
    }
    return {}
  }
  if (!options.next && options.total) {
    return {};
  }
  if (!options.next) {
    return {operation: cellName};
  }
  // console.log('first number ----');
  // console.log({next: cellName, total: null});
  return {
    total: options.next,
    next: null,
    operation: cellName
  };
}