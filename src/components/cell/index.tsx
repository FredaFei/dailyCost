import * as React from "react";
import {Icon} from '../../components/index'
import classes, {createScopedClasses} from '../../utils/classnames'
import './index.scss'

const componentName = 'Cell'
const sc = createScopedClasses(`component-${componentName.toLocaleLowerCase()}`)

interface Props extends IStyledProps {
  iconLeft?: string
  iconRight?: string
  leftText?: string
  onClick?: React.MouseEventHandler
}

const Cell: React.FunctionComponent<Props> = props => {
  const onClick = (e: React.MouseEvent): any => {
    e.preventDefault()
    const {onClick} = props
    onClick && (onClick as React.MouseEventHandler)(e)
  }
  const {className, iconRight, leftText, iconLeft, children, ...rest} = props
  return (
    <div className={classes(sc('wrapper'), className)} {...rest}>
      <div className={sc('left')}>
        {iconLeft && <Icon name={iconLeft}/>}
        {leftText && <span className={sc('label')}>{leftText}</span>}
      </div>
      <div className={sc('right')} onClick={onClick}>
        {children}
        {iconRight && <Icon name={iconRight}/>}
      </div>
    </div>
  );
}
Cell.displayName = componentName
Cell.defaultProps = {
  iconRight: 'right'
}
export default Cell
