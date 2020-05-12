import * as React from 'react';
import { createScopedClasses } from 'utils/classnames';
import { RouteComponentProps } from 'react-router';

import './index.scss';

const componentName = 'detail';
const sc = createScopedClasses(componentName);

interface Props extends RouteComponentProps {}

/**
 * todo
 * 1. api mock
 * 2. detail action edit/delete
 * 3. tags add/edit/delete
 * 4. record edit
 * 5. chart
 */
const Detail: React.FunctionComponent<Props> = props => {
  //detail
  return (
    <div className={sc('page')}>
      <div className={sc('main')}>
        detail
      </div>
    </div>
  );
};
export default Detail;
