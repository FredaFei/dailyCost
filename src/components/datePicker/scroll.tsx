import * as React from 'react';
import classes, { createScopedClasses } from '../../utils/classnames';
import './index.scss';
import { useEffect, useRef, useState } from 'react';

interface Props extends IStyledProps {
}

const componentName = 'Scroll';
const sc = createScopedClasses(`component-${componentName.toLocaleLowerCase()}`);

const Scroll: React.FunctionComponent<Props> = props => {
  const {className,...rest} = props
  useEffect(() => {
  }, []);

  return <div className={classes(sc('content'), className)} {...rest}>{props.children}</div>
};
Scroll.displayName = componentName;
Scroll.defaultProps = {
};
export default Scroll;
