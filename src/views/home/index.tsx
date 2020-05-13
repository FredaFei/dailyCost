import * as React from 'react';
import { useReducer } from 'react';
import { createScopedClasses } from 'utils/classnames';
import CostList from './components/costList';
import Header from './components/header'
import AppContext from '@/context';
import CostListReducer from '@/reducers/costListReducer'
import './index.scss';

const componentName = 'Home';
const sc = createScopedClasses(componentName);

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
  currentDate: Date
}

interface Action {
  type: string

  [k: string]: any
}

const store: Store = {
  costList: [],
  currentDate: new Date()
}
const Home = () => {
  const [state, dispatch] = useReducer(reducer, store)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className={sc('page')}>
        <Header/>
        <div className={sc('main')}>
          <CostList/>
        </div>
      </div>
    </AppContext.Provider>
  );
};
export default Home;