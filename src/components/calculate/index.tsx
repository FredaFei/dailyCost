import * as React from 'react';
import classes, { createScopedClasses } from 'utils/classnames';
import Display from './display';
import CellPanel from './cellPanel';
import calculate from './calculate';
import { useRef, useState } from 'react';

const componentName = 'Gold';
const sc = createScopedClasses(componentName);

interface Props {
  onAdd: (value: number) => void
}

export interface Expression {
  total: string | null
  next: string | null
  operation: string | null
}

export const defaultExpression = { total: null, next: null, operation: null };

const Calculate: React.FunctionComponent<Props> = props => {
  const [expression, setExpression] = useState<Expression>(defaultExpression);
  const prevDataRef = useRef<Expression>(defaultExpression);
  const onPress = (value: string) => {
    prevDataRef.current = { ...prevDataRef.current, ...calculate(prevDataRef.current, value) };
    setExpression(prevDataRef.current);
    const sum: number = +result()
    if (value === '完成' && sum && sum !== 0) {
      //  todo
      console.log('add');
      props.onAdd(sum)
    }
  };
  const result = () => {
    if (expression.total && expression.operation) {
      return `${expression.total}${expression.operation}${expression.next || ''}`;
    }
    return expression.next || expression.total || '0';
  };
  return (
    <div className={classes(sc('wrapper'))}>
      <div className={classes(sc('content'))}>
        <Display value={result()}/>
        <CellPanel onPress={onPress}/>
      </div>
    </div>
  );
};
export default Calculate;
