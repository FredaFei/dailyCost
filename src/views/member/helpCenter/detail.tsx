import * as React from "react";
import { useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import classes, { createScopedClasses } from 'utils/classnames'
import { Header, Collapse, Pane } from 'components/index'
import { helpCenterDetail } from '@/api/about'

import './index.scss'

const componentName = 'HelpCenterDetail'
const sc = createScopedClasses(componentName)

interface Props extends RouteComponentProps {}

interface CollapseItem {
  title: string
  content: string
  id: number
}

const useHandbook = (type: string) => {
  const [collapseList, setCollapseList] = useState<Array<CollapseItem>>([])
  useEffect(() => {
    helpCenterDetail({ type, page_size: 20 })
      .then((res: any) => {
        setCollapseList(res.information_list);
      }, err => {console.log(err)});
  }, [type]);
  return [collapseList];
};
const Detail: React.FunctionComponent<Props> = props => {
  const [selected] = useState([])
  const [collapseList] = useHandbook((props.match.params as any).type);
  return (
    <div className={classes(sc('content'))}>
      <Header>帮助详情</Header>

      {collapseList.length === 0 && (props.match.params as any).type}
      {collapseList.length > 0 &&
      <Collapse defaultActiveKey={selected} className={sc('inner')}>
        {collapseList.map((item: CollapseItem) => <Pane header={item.title} key={item.id}
                                                        name={item.id}>
          <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
        </Pane>)}
      </Collapse>
      }
    </div>
  );
}
export default withRouter(Detail)
