import * as React from 'react';
import { useEffect, useState } from 'react';
import { createScopedClasses } from 'utils/classnames';
import { RouteComponentProps } from 'react-router';
import CostList from './components/costList';

import './index.scss';
import { getCostList } from '@/api/home';

const componentName = 'Home';
const sc = createScopedClasses(componentName);

interface Props extends RouteComponentProps {}

interface HeaderProps {
  onClick?: () => void
  children?: React.ReactNode
}

const Header: React.FunctionComponent<HeaderProps> = props => {
  const onClick = () => {
    console.log('header click');
    props.onClick && props.onClick();
  };
  return <div className={sc('header')}>
    <div className={sc('attrs')}>
      <div className={sc('left', 'name')}>2020年</div>
      <div className={sc('right')}>
        <span className={sc('name')}>支出</span>
        <span className={sc('name')}>收入</span>
      </div>
    </div>
    <div className={sc('values')} onClick={onClick}>
      <div className={sc('left')}>
        <div className={sc('date')}>01<i>月</i> <span>点我</span></div>
      </div>
      <div className={sc('right', 'cost')}>
        <div className={sc('number')}>29<i>.00</i></div>
        <div className={sc('number')}>2990<i>.00</i></div>
      </div>
    </div>
  </div>;
};


const Home: React.FunctionComponent<Props> = props => {
  const [costList,setCostList] = useState([])
  useEffect(() => {
    getCostList({type: 0}).then(result => {
      setCostList(result.data.list)
    }, err => {
      console.log(err);
    })
  }, [])
  return (
    <div className={sc('page')}>
      <Header/>
      <div className={sc('main')}>
        <CostList dataSource={costList}/>
      </div>
    </div>
  );
};
export default Home;
