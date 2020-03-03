import * as React from "react";
import classes, { createScopedClasses } from 'utils/classnames'

import './cell.scss'
const componentName = 'DailyDisplay'
const sc = createScopedClasses(componentName)

interface Props extends StyledProps {
  value:string
}

const Display: React.FunctionComponent<Props> = props => {
  return (
    <div className={classes(sc(''),props.className)}>{props.value}</div>
  );
}
export default Display
