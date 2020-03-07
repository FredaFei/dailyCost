import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import { RouteComponentProps } from 'react-router';
import CostList from './components/costList';

import './index.scss';

const componentName = 'Home';
const sc = createScopedClasses(componentName);

interface Props extends RouteComponentProps {

}

const mockData = [
  {
    id: '1',
    date: '1583559453236',
    records: [
      {id: 'r-1', icon: 'left', name: '交通', amount: '7', amountType: '-1', date: '1583559453216', note: ''},
      {id: 'r-2', icon: 'left', name: '化妆品', amount: '170', amountType: '-1', date: '1583559443216', note: ''},
      {id: 'r-3', icon: 'left', name: '零食', amount: '57', amountType: '-1', date: '1583559413216', note: ''},
      {id: 'r-4', icon: 'left', name: '服饰', amount: '119', amountType: '-1', date: '1583559653216', note: ''},
      {id: 'r-5', icon: 'left', name: '鞋子', amount: '99', amountType: '-1', date: '1583559493216', note: ''},
    ]
  },
  {
    id: '2',
    date: '1583554453236',
    records: [
      {id: 'r-1', icon: 'left', name: '交通', amount: '7', amountType: '-1', date: '1583559453216', note: ''},
      {id: 'r-2', icon: 'left', name: '化妆品', amount: '170', amountType: '-1', date: '1583559443216', note: ''},
      {id: 'r-3', icon: 'left', name: '零食', amount: '57', amountType: '-1', date: '1583559413216', note: ''},
    ]
  }
];

const Header: React.FunctionComponent = props => {
  return <div className={sc('header')}>
    <div className={sc('attrs')}>
      <div className={sc('left', 'name')}>2020年</div>
      <div className={sc('right')}>
        <span className={sc('name')}>支出</span>
        <span className={sc('name')}>收入</span>
      </div>
    </div>
    <div className={sc('values')}>
      <div className={sc('left')}>
        <div className={sc('date')}>01<i>月</i></div>
      </div>
      <div className={sc('right', 'cost')}>
        <div className={sc('number')}>29<i>.00</i></div>
        <div className={sc('number')}>2990<i>.00</i></div>
      </div>
    </div>
  </div>;
};

const Home: React.FunctionComponent<Props> = props => {
  return (
    <div className={sc('page')}>
      <Header/>
      <div className={sc('main')}>
        <CostList dataSource={mockData}/>
      </div>
    </div>
  );
};
export default Home;
