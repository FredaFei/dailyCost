import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import CostItem, { CostItemProps } from './costItem';
import costListHook from '@/hooks/costListHook';
import './index.scss';

const sc = createScopedClasses('cost-list');

export default function CostList() {
  const { costList } = costListHook()
  return (
    <div className={sc('')}>
      {
        costList.length > 0 && costList.map((item:CostItemProps) => <CostItem item={item} key={item.id}/>)
      }

    </div>
  );
};
