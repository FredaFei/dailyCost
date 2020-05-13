import * as React from 'react';
import { useReducer } from 'react';
import { createScopedClasses } from 'utils/classnames';
import CostList from './components/costList';
import AppContext from '../../context';
import CostListReducer from '@/reducers/costListReducer'
import './index.scss';

const componentName = 'Home';
const sc = createScopedClasses(componentName);

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

function reducer(state: Store, action: Action) {
  const temp = { ...CostListReducer }
  const fn = temp[action.type]
  if (fn) {
    return fn(state, action)
  } else {
    throw Error(`error action type: ${action.type}`)
  }

}

interface Store {
  costList: any[]
}

interface Action {
  type: string
  [k: string]: any
}

const store: Store = {
  costList: []
}
const Home = () => {
  const [state, dispatch] = useReducer(reducer, store)
  const api = { state, dispatch }
  return (
    <AppContext.Provider value={api}>
      <div className={sc('page')}>
        <Header/>
        <div className={sc('main')}>
          <CostList />
        </div>
      </div>
    </AppContext.Provider>
  );
};
export default Home;