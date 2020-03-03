import * as React from "react";
import classes, { createScopedClasses } from '@/utils/classnames'
import utils from '@/utils/help'
import * as Cookies from 'js-cookie';
import './index.scss'
import { RouteComponentProps } from "react-router";
import { Button } from "components/index";

const componentName = 'Login'
const sc = createScopedClasses(componentName)


interface Props extends RouteComponentProps {

}

const Login: React.FunctionComponent<Props> = props => {
  const onClick = () => {
    Cookies.set('auth', 'test')
    props.history.replace(utils.getQueryString('fromUrl') || '')
  }
  return (
    <div className={classes(sc('wrapper'))}>
      <Button onClick={onClick}>login</Button>
    </div>
  );
}
export default Login
