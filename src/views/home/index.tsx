import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import { RouteComponentProps } from 'react-router';
import CostList from './components/costList'

import './index.scss';

const componentName = 'Home';
const sc = createScopedClasses(componentName);

interface Props extends RouteComponentProps {

}

const Home: React.FunctionComponent<Props> = props => {
  return (
    <div className={sc('page')}>
      <div className={sc('header')}>
        <h1>home</h1>
      </div>
      <div className={sc('page')}>
        <CostList />
      </div>
    </div>
  );
};
export default Home;
