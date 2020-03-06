import * as React from 'react';
import classes, { createScopedClasses } from 'utils/classnames';
// import {getSlides} from "@/api/home";
import { RouteComponentProps } from 'react-router';
import './index.scss';
import { useEffect } from 'react';

const componentName = 'Member';
const sc = createScopedClasses(componentName);

interface Props extends RouteComponentProps {

}

const Member: React.FunctionComponent<Props> = props => {
  useEffect(() => {
    // getSlides().then(res => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // })
  }, []);
  return (
    <div className={classes(sc('content'))}>
      member
    </div>
  );
};
export default Member;
