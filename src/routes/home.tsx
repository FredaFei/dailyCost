import AuthRoute from './auth-route';
import * as React from 'react';
import Loadable from '@loadable/component';

const Home = Loadable(() => import('../views/home/index'));

const NotFound= <AuthRoute key='err404' component={Loadable(() => import('../views/notFound'))}/>

export default [
  <AuthRoute key="home" exact={true} path="/" component={Home}/>,
  <AuthRoute key="home" exact={true} path="/home" component={Home}/>,
  <AuthRoute key="product" exact={true} path="/product" component={Loadable(()=>import('../views/product/index'))}/>,
  <AuthRoute key="member" exact={true} path="/member" component={Loadable(()=>import('../views/member/index'))}/>,
  <AuthRoute key="login" exact={true} path="/login" component={Loadable(()=>import('../views/loginSignup/login'))}/>,
  <AuthRoute key="signUp" path="/signUp" component={Loadable(()=>import('../views/loginSignup/signUp'))}/>
].concat(NotFound)
