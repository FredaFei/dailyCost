import calculate from '../calculate';

function pressButtons(buttons: Array<string>) {
  const result = {next: null, total: null, operation: null};
  buttons.forEach(button => Object.assign(result, calculate(result, button)));
  Object.keys(result).forEach(k => {
    if (result[k] === null) {delete result[k];}
  });
  return result;
}

function expectButtons(buttons: Array<string>, expectation: object) {
  expect(pressButtons(buttons)).toEqual(expectation);
}

function test(buttons: Array<string>, expectation: object, only?: boolean) {
  const fn = only ? it.only : it;
  fn(`press ${buttons.join(',')} -> ${JSON.stringify(expectation)}`, () => {
    expectButtons(buttons, expectation);
  });
}

describe('calculate', () => {
  it('接受1个className', () => {
    expect(1).toEqual(1);
  });
  test(['2'], {next: '2'});
  test(['2', '3'], {next: '23'});
  test(['2', '3', '+'], {total: '23', operation: '+'});
  test(['2', '+', '3'], {total: '2', next: '3', operation: '+'});

  test(['='], {});
  test(['2', '+', '3', '='], {total: '5'});
  test(['0', '0', '+', '0', '='], {total: '0'});
  test(['0', '0'], {next: '0'});
  test(['0', '+', '0', '0'], {total: '0', next: '0', operation: '+'});
  test(['0', '0', '+', '0', '0'], {total: '0', next: '0', operation: '+'});
  test(['0', '+', '0', '1', '='], {total: '1'});
  test(['0', '1', '+', '0', '1'], {total: '1', next: '1', operation: '+'});
  test(['0', '.', '1', '+', '0', '.', '1'], {total: '0.1', next: '0.1', operation: '+'});
  test(['2', '+', '3', '-'], {total: '5', operation: '-'});
  test(['2', '+', '3', '-', '1'], {total: '5', next: '1', operation: '-'});
  test(['2', '+', '3', '-', '1', '0'], {total: '5', next: '10', operation: '-'});
  test(['2', '+', '3', '-', '1', '0', '='], {total: '-5'});
  test(['2', '+', '3', '=', '-', '1', '0', '='], {total: '-5'});

  test(['2', '.', '3'], {next: '2.3'});
  test(['.', '3'], {next: '0.3'});
  test(['1', '.', '3', '.'], {next: '1.3'});
  test(['.', '2', '+', '.', '3'], {total: '0.2', next: '0.3', operation: '+'});
  test(['.', '2', '+', '.', '3', '='], {total: '0.5'});
  test(['2', '+', '3', 'AC'], {});

  test(['%'], {});
  test(['2', '%'], {next: '0.02'});
  test(['2', '%', 'x', '2', '='], {total: '0.04'});
  test(['2', '%', 'x', '2'], {total: '0.02', next: '2', operation: 'x'});
  test(['2', 'x', '2', '%'], {total: '0.04'});
  test(['2', 'x', '2', '=', '%'], {total: '0.04'});

  test(['+/-'], {});
  test(['2', '+/-'], {next: '-2'});
  test(['2', '+', '8', '+/-'], {total: '2', next: '-8', operation: '+'});
  test(['2', '+', '8', '+/-', '+/-'], {total: '2', next: '8', operation: '+'});
  test(['2', '+', '8', '+/-', '='], {total: '-6'});
  test(['2', '+', '8', '=','+/-'], {total: '-10'});

  test(['2', 'x', 'x'], {total: '2', operation: 'x'});
  test(['2', '÷', '÷'], {total: '2', operation: '÷'});
  test(['2', '÷', 'x', '+', '-', 'x'], {total: '2', operation: 'x'});

  test(['÷'], {});
  test(['x'], {});
  test(['+'], {});
  test(['-'], {});

  test(['CE'], {});
  test(['2', '÷', 'CE'], {next: '2'});
  test(['2', '2', 'CE'], {next: '2'});
  test(['2', '÷', '2', 'CE'], {total: '2', operation: '÷'});
  test(['2', '÷', '2', '0', 'CE'], {total: '2', next: '2', operation: '÷'});
  test(['2', '÷', '2', '=', 'CE'], {});
  test(['22', '÷', '2', '=', 'CE'], {total: '1'});
  test(['22', '÷', '2', '=', '+', '1', '0', 'CE'], {total: '11', operation: '+', next: '1'});

});