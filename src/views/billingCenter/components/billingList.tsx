import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import BillingItem, { BillingItemProps } from './billingItem';

import './index.scss';

const sc = createScopedClasses('billingCenter-list');

interface Props {
  dataSource: Array<BillingItemProps>
  onClick: (id: string | number) => void
}

const BillingList: React.FunctionComponent<Props> = props => {
  return (
    <div className={sc('')}>
      {
        props.dataSource.length > 0 && props.dataSource.map(item => <BillingItem item={item} key={item.id} onClick={props.onClick}/>)
      }

    </div>
  );
};
export default BillingList;
