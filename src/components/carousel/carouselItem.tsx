import * as React from "react";
import './index.scss'
import classes, { createScopedClasses } from 'utils/classnames'

const componentName = 'CarouselItem'
const sc = createScopedClasses(`component-${componentName.toLocaleLowerCase()}`)

export interface Props extends IStyledProps {
  current?: boolean
  prev?: boolean
}

const carouselItem: React.FunctionComponent<Props> = props => {
  const { current, prev,className,...rest } = props
  return (
    <div className={classes(sc('',current && 'current', prev && 'prev'),className)} {...rest}>{props.children}</div>
  )
}
export default carouselItem