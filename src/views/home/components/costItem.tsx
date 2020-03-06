import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import Icon from '@/components/icon';

// import './index.scss';

const sc = createScopedClasses('cost-item');

interface Props {

}

const CostItem: React.FunctionComponent<Props> = props => {
  return (
    <div className={sc('')}>
      <div className={sc('top')}>
        <div className={sc('left')}>01月20日 星期一</div>
        <div className={sc('right')}>支出：29</div>
      </div>
      <div className={sc('body')}>
        <div className={sc('record')}>
          <div className={sc('left')}>
            <Icon name="left"/>
            <span className="source">交通</span>
          </div>
          <div className={sc('right')}>-5</div>
        </div>
      </div>
    </div>
  );
};
export default CostItem;
