import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import './index.scss';
import AppContext from '@/context'
import { useContext } from 'react';

const componentName = 'Home';
const sc = createScopedClasses(componentName);

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = props => {
  const { state } = useContext(AppContext);
  const onClick = () => {
  };
  const year = state.currentDate.getFullYear()
  const month = state.currentDate.getMonth() + 1

  return <div className={sc('header')}>
    <div className={sc('attrs')}>
      <div className={sc('left', 'name')}>{year}年</div>
      <div className={sc('right')}>
        <span className={sc('name')}>支出</span>
        <span className={sc('name')}>收入</span>
      </div>
    </div>
    <div className={sc('values')} onClick={onClick}>
      <div className={sc('left')}>
        <div className={sc('date')}>{month < 10 ? `0${month}` : month}<i>月</i> <span>点我</span></div>
      </div>
      <div className={sc('right', 'cost')}>
        <div className={sc('number')}>29<i>.00</i></div>
        <div className={sc('number')}>2990<i>.00</i></div>
      </div>
    </div>
  </div>;
};
export default Header