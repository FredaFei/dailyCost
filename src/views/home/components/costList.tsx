import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import CostItem from './costItem';

import './index.scss';

const sc = createScopedClasses('cost-list');

interface Props {

}

const CostList: React.FunctionComponent<Props> = props => {
  return (
    <div className={sc('')}>
      <CostItem/>
    </div>
  );
};
export default CostList;
