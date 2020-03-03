import * as React from 'react';
import classes, {createScopedClasses} from 'utils/classnames';

import './cell.scss';

const componentName = 'DailyCell';
const sc = createScopedClasses(componentName);

interface Props extends StyledProps {
  name: string
  onPress: (k: string) => void
}

const Cell: React.FunctionComponent<Props> = props => {
  const onCellClick = () => {
    props.onPress(props.name);
  };
  return (
    <span className={classes(sc(''), props.className)} onClick={onCellClick}>{props.name}</span>
  );
};
export default Cell;
