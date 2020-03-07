import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import CostItem, { CostItemProps } from './costItem';

import './index.scss';

const sc = createScopedClasses('cost-list');

interface Props {
  dataSource: Array<CostItemProps>
}

const CostList: React.FunctionComponent<Props> = props => {
  return (
    <div className={sc('')}>
      {
        props.dataSource.length > 0 && props.dataSource.map(item => <CostItem item={item} key={item.id}/>)
      }

    </div>
  );
};
export default CostList;
