import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import { Link } from 'react-router-dom'
import Icon from '@/components/icon';

import './index.scss';

const sc = createScopedClasses('cost-item-record');

export interface RecordItemProps {
  id: string
  icon: string
  name: string
  amount: string | number
  amountType: 0 | 1
  date: string
  note: string
}

interface Props {
  record: RecordItemProps
}

const RecordItem: React.FunctionComponent<Props> = props => {
  const { icon, name, amount, id } = props.record;
  return <Link to={`/detail?id=${id}`} className={sc('')}>
    <div className={sc('left')}>
      <Icon name={icon} hasBackground={true}/>
    </div>
    <div className={sc('right')}>
      <span className={sc('source')}>{name}</span>
      <div className={sc('cost')}>{amount}</div>
    </div>
  </Link>;
};
export default RecordItem;
