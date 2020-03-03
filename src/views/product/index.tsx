import * as React from 'react';
import classes, {createScopedClasses} from 'utils/classnames';
import {RouteComponentProps} from 'react-router';
import Display from './components/display';
import CellPanel from './components/cellPanel';
import calculate from './calculate';
import './index.scss';
import {useRef, useState} from 'react';

const componentName = 'Gold';
const sc = createScopedClasses(componentName);

interface Props extends RouteComponentProps {

}

export interface State {
  total: string | null
  next: string | null
  operation: string | null
}

const defaultState = {total: null, next: null, operation: null};
const Gold: React.FunctionComponent<Props> = props => {
  const [data, setData] = useState<State>(defaultState);
  const prevDataRef = useRef<State>(defaultState);
  const onPress = (value: string) => {
    prevDataRef.current = {...prevDataRef.current, ...calculate(prevDataRef.current, value)};
    setData(prevDataRef.current);
  };
  const xx = () => {
    if (data.next && data.operation) {
      return `${data.total}${data.operation}${data.next}`;
    }
    return data.next || data.total || '0';
  };
  return (
    <div className={classes(sc('wrapper'))}>
      <div className={classes(sc('content'))}>
        <Display value={xx()}/>
        <CellPanel onPress={onPress}/>
      </div>
    </div>
  );
};
export default Gold;
