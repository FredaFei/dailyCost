import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import RecordItem, { RecordItemProps } from './recordItem';

import './index.scss';

const sc = createScopedClasses('cost-item');

export interface CostItemProps {
  id: RecordItemProps['id']
  date: RecordItemProps['date']
  records: Array<RecordItemProps>
}

interface Props {
  item: CostItemProps
}

const CostItem: React.FunctionComponent<Props> = props => {
  const {date,records} = props.item
  return (
    <div className={sc('')}>
      <div className={sc('top')}>
        <div className={sc('left')}>01月20日 星期一 {date}</div>
        <div className={sc('right')}>支出：29</div>
      </div>
      <div className={sc('body')}>
        {
          records.length > 0 &&
          records.map(i => <RecordItem record={i} key={i.id}/>)
        }

      </div>
    </div>
  );
};
export default CostItem;
