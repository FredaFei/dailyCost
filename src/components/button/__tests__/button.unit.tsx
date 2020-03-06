import * as renderer from 'react-test-renderer'
import React from 'react'
import Button from '../button';

describe('calculate', () => {
  it('Button 存在', () => {
    const json = renderer.create(<Button>hello</Button>).toJSON()
    expect(json).toMatchSnapshot()
  })
});

