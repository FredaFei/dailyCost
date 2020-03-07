import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import Icon from '@/components/icon';

import './index.scss';

const sc = createScopedClasses('cost-item-record');

export interface RecordItemProps {
  id: string
  icon: string
  name: string
  amount: string | number
  amountType: '-1' | '1',
  date: string
  note: string
}

interface Props {
  record: RecordItemProps
}

const RecordItem: React.FunctionComponent<Props> = props => {
  const {icon, name, amount} = props.record;
  return <div className={sc('')}>
    <div className={sc('left')}>
      <Icon name={icon}/>
    </div>
    <div className={sc('right')}>
      <span className={sc('source')}>{name}</span>
      <div className={sc('cost')}>{amount}</div>
    </div>
  </div>;
};
export default RecordItem;
