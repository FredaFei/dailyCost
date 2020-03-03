import * as React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from '../../components/index'
import classes, { createScopedClasses } from '../../utils/classnames'
import './index.scss'

const componentName = 'Footer'
const sc = createScopedClasses(`component-${componentName.toLocaleLowerCase()}`)

interface Item {
  text: string,
  icon: string,
  path: string
}

interface Props extends IStyledProps {
  dataSource: Item[],
  pathname: string
}

const Footer: React.FunctionComponent<Props> = props => {
  const { dataSource, pathname, className, ...rest } = props
  const activeClass = (item: Item) => {
    return (pathname === item.path || pathname === '/home' && item.path === '/') ? 'active' : '';
  }
  return (
    <nav className={classes(sc('wrapper'), className)} {...rest}>
      {dataSource.map((i: Item) => (
          <NavLink className={classes(sc('nav-item'), 'clearfix', activeClass(i))} key={i.text}
                   to={i.path} exact>
            <Icon className="icon" name={i.icon}/>
            <div className={sc('text')}>{i.text}</div>
          </NavLink>
        )
      )}
    </nav>
  );
}
Footer.displayName = componentName
Footer.defaultProps = {}
export default Footer
