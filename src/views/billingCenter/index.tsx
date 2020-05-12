import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import { RouteComponentProps } from 'react-router';
import Recorder from './components/recorder/index';

import './index.scss';
import { useState } from 'react';
import BillingList from './components/billingList';
import { BillingItemProps } from './components/billingItem';

const componentName = 'billingCenter';
const sc = createScopedClasses(componentName);

interface Props extends RouteComponentProps {}

const mockData: Array<BillingItemProps> = [
  {
    id: '1',
    icon: 'left',
    name: '交通',
  },
  {
    id: '2',
    icon: 'left',
    name: '交通',
  },
  {
    id: '3',
    icon: 'left',
    name: '交通',
  }
];


const BillingCenter: React.FunctionComponent<Props> = props => {
  const [visible, setVisible] = useState<boolean>(false);
  const onCloseDatePicker = () => {
    setVisible(false);
  }
  const onItemClick = (id: string | number) => {
    setVisible(true);
  }
  //detail
  return (
    <div className={sc('page')}>
      <div className={sc('main')}>
        <BillingList dataSource={mockData} onClick={onItemClick}/>
      </div>
      <Recorder visible={visible} onClose={onCloseDatePicker}/>
    </div>
  );
};
export default BillingCenter;
