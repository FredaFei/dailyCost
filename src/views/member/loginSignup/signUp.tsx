import * as React from "react";
import classes, {createScopedClasses} from 'utils/classnames'
import './index.scss'

const componentName = 'SignUp'
const sc = createScopedClasses(componentName)


interface Props extends IStyledProps {

}

const SignUp:React.FunctionComponent<Props> = props => {
  return (
    <div className={classes(sc('wrapper'))}>
      注册
    </div>
  );
}
export default SignUp
