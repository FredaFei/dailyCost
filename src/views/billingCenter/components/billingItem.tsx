import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import Icon from '@/components/icon';

import './index.scss';

const sc = createScopedClasses('billingCenter-item');

export interface BillingItemProps {
  id: string
  icon: string
  name: string
}

interface Props {
  item: BillingItemProps
  onClick: (id: string | number) => void
}

const BillingItem: React.FunctionComponent<Props> = props => {
  const { icon, name, id } = props.item;
  const onItemClick = () => {
    props.onClick(id)
  }
  return <div className={sc('')} onClick={onItemClick}>
    <Icon name={icon} hasBackground={true}/>
    <span className={sc('source')}>{name}</span>
  </div>;
};
export default BillingItem;
