import * as React from "react";
import { Cell, Icon } from '@/components/index'
import classes, { createScopedClasses } from 'utils/classnames'
// import {getSlides} from "@/api/home";
import { RouteComponentProps } from "react-router";
import './index.scss'
import { useEffect } from "react";
import invite from '@/images/member/invite.png'

const componentName = 'Member'
const sc = createScopedClasses(componentName)

interface Props extends RouteComponentProps {

}

interface NavItem {
  name: string,
  path: string,
  icon: string
}

const navs = {
  base: [
    { name: '我的钱包', path: '/wallet', icon: '' },
    { name: '购买记录', path: '/history', icon: '' },
    { name: '银行卡', path: '/bank', icon: '' },
    { name: '我的积分', path: '/point', icon: '' },
  ],
  vip: [
    { name: '联系我们', path: '/concat', icon: '' },
    { name: '平台公告', path: '/notice', icon: '' },
    { name: '帮助中心', path: '/helpCenter', icon: '' },
  ]
}

interface Avatar {

}

const Avatar: React.FunctionComponent<Avatar> = props => {
  return (
    <div className={sc('avatar')}>
      <div className={sc('base-info')}>
        <img src={invite} alt=""/>
        <span className="phone">139****9380</span><Icon name="right"/>
      </div>
      <div className={sc('top')}>
        <div className="field"><span className="total-assets">0.00</span><Icon name="right"/></div>
        <div className="label">我的总资产(元)<Icon name="right"/></div>
      </div>
      <div className={sc('banner')}>
        <img src={invite} alt="邀请好友"/>
        <div className={sc('button')}>
          <div className="half">
            <div className="balance">0.00</div>
            <div className="label">账户余额（元）</div>
          </div>
          <div className="half">充值<Icon name="right"/></div>
        </div>
      </div>
    </div>
  )
}


const Member: React.FunctionComponent<Props> = props => {
  useEffect(() => {
    // getSlides().then(res => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // })
  }, [])
  const renderNav = (data: Array<NavItem>) => data.map(i => <Cell iconLeft="left" leftText={i.name} key={i.name}
                                                                  onClick={() => {onSkipClick(i.path)}}></Cell>);

  const onSkipClick = (path: string) => {
    props.history.push(path)
  }

  return (
    <div className={classes(sc('wrapper'))}>
      {/*<div className="avatar" style={{height: '400px', background: 'red'}}></div>*/}
      <Avatar/>
      <div className={classes(sc('content'))}>
        <div className={sc('section')}>{renderNav(navs['base'])}</div>
        <div className={sc('section')}>{renderNav(navs['vip'])}</div>
      </div>
    </div>
  );
}
export default Member
