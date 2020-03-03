import * as React from "react";
import { Cell, Header } from 'components/index'
import { withRouter, RouteComponentProps } from "react-router";
import classes, { createScopedClasses } from 'utils/classnames'
import './index.scss'

const componentName = 'HelpCenter'
const sc = createScopedClasses(componentName)

interface Props extends RouteComponentProps {}

interface NavItem {
  name: string,
  type: string,
  icon: string
}

const navs = {
  base: [
    { name: '常见问题', type: '常见问题', icon: '' },
    { name: '注册登录', type: '注册登录', icon: '' },
    { name: '绑卡实名', type: '绑卡实名', icon: '' },
  ],
  vip: [
    { name: '优惠券说明', type: '优惠券说明', icon: '' },
    { name: '推荐好友', type: '推荐好友', icon: '' },
    { name: '奖励', type: '奖励', icon: '' },
    { name: '会员说明', type: '会员说明', icon: '' },
    { name: '积分说明', type: '积分说明', icon: '' },
    { name: '任务说明', type: '任务说明', icon: '' },
  ]
}


const HelpCenter: React.FunctionComponent<Props> = props => {
  const onSkipClick = (type: string) => {
    props.history.push(`/helpCenter/detail/${type}`);
  }
  const isDetail = props.location.pathname.includes("/helpCenter/detail/")
  const toggleClass = isDetail ? 'hide' : 'show'
  const renderNav = (data: Array<NavItem>) => data.map(i => <Cell iconLeft="left" leftText={i.name} key={i.name}
                                                                  onClick={() => {onSkipClick(i.type)}}></Cell>);
  return (
    <div className={classes(sc('wrapper'))}>
      <Header className={classes(toggleClass)}>帮助中心列表</Header>
      <div className={classes(sc('content'), toggleClass)}>
        <div className={sc('section')}>{renderNav(navs['base'])}</div>
        <div className={sc('section')}>{renderNav(navs['vip'])}</div>
      </div>
      {props.children}
    </div>
  );
}
export default withRouter(HelpCenter)
