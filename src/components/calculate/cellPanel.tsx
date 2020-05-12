import * as React from 'react';
import classes, {createScopedClasses} from '@/utils/classnames';
import {range} from '@/utils/collection';
import Cell from './cell';
import './cell.scss';

const componentName = 'DailyPanel';
const sc = createScopedClasses(componentName);

interface Props extends StyledProps {
  onPress: (k: string) => void
}

const calculateMap = [
  {name: 'AC', className: ''},
  // {name: '+/-', className: ''},
  {name: 'CE', className: 'gray'},
  {name: '%', className: ''},
  {name: '÷', className: 'gray'},
  {name: '7', className: ''},
  {name: '8', className: ''},
  {name: '9', className: ''},
  {name: 'x', className: 'gray'},
  {name: '4', className: ''},
  {name: '5', className: ''},
  {name: '6', className: ''},
  {name: '+', className: 'gray'},
  {name: '1', className: ''},
  {name: '2', className: ''},
  {name: '3', className: ''},
  {name: '-', className: 'gray'},
  {name: '.', className: ''},
  {name: '0', className: ''},
  {name: '=', className: 'yellow'},
  {name: '完成', className: 'yellow'},
];
const CellPanel: React.FunctionComponent<Props> = props => {
  const onCellPress = (name: string) => {
    props.onPress(name);
  };
  return (
    <div className={classes(sc(''), props.className)}>
      {
        range(0, 4).map(row => (
          <div className={sc('row')} key={`row-${row}`}>
            {
              range(0, 3).map(col => {
                const item = calculateMap[row * 4 + col];
                return <Cell key={item.name} name={item.name} onPress={onCellPress} className={item.className}/>;
              })
            }
          </div>
        ))

      }
    </div>
  );
};
export default CellPanel;
