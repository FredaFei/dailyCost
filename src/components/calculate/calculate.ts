import {Expression, defaultExpression} from './index';
import Big from 'big.js';
import {isNumber} from 'utils/help';
import operate from './operate';

export default function (options: Expression, cellName: string) {
  if (cellName === 'AC') {return defaultExpression;}
  if (isNumber(cellName)) {
    if (cellName === '0' && options.next === '0') {return {};}
    if (options.operation) {
      if (options.next) {
        const next = options.next === '0' && cellName === '0' ? cellName :
          options.next === '0' && cellName !== '.' ? cellName : options.next + cellName;
        return {next};
      }
      return {next: cellName};
    }
    if (options.next) {
      const next = options.next === '0' && cellName === '0' ? cellName :
        options.next === '0' && cellName !== '.' ? cellName : options.next + cellName;
      return {next, total: null};
    }
    return {next: cellName, total: null};
  }
  if (cellName === 'CE') {
    if (options.next) {
      return {next: options.next.length === 1 ? null : options.next.substring(0, options.next.length - 1)};
    }
    if (options.total) {
      if (options.operation) {
        return {next: options.total, operation: null, total: null};
      }
      return {total: options.total.length === 1 ? null : options.total.substring(0, options.total.length - 1)};
    }
    return {};
  }
  if (cellName === '.') {
    if (options.next) {
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
  if (cellName === '=' || cellName==='完成') {
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
  return {
    total: options.next,
    next: null,
    operation: cellName
  };
}