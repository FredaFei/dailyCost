import * as React from "react";
import {Icon} from 'components/index'
import classes, {createScopedClasses} from 'utils/classnames'
import './index.scss'
import { RouteComponentProps, withRouter } from "react-router";

const componentName = 'Header'
const sc = createScopedClasses(`component-${componentName.toLocaleLowerCase()}`)

interface Props extends IStyledProps {
  iconLeft?: string
  onClick?: React.MouseEventHandler
}

type PropsWithRoute = Props & RouteComponentProps

const Header: React.FunctionComponent<PropsWithRoute> = props => {
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const {onClick} = props
    onClick && (onClick as React.MouseEventHandler)(e)
  }
  const onGoBack = ()=>{
    props.history.goBack()
  }
  const {className, iconLeft, staticContext,children, ...rest} = props
  return (
    <div className={classes(sc('wrapper'), className)} {...rest}>
      {iconLeft && <div className={sc('left')} onClick={onGoBack}><Icon name={iconLeft}/></div>}
      <div className={sc('center')} onClick={onClick}>{children}</div>
    </div>
  );
}
Header.displayName = componentName
Header.defaultProps = {
  iconLeft: 'left'
}
export default withRouter(Header)
