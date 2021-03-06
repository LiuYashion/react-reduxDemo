import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Index from '../Component/Index'; //销售录入

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

/**
 * {此处是为了分离打包}
 */
const TopicDetial = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/TopicDetial').default)
    },'TopicDetial')
}
const UserLogin = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/UserLogin').default)
    },'UserLogin')
}
const PostTopic = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/PostTopic').default)
    },'PostTopic')
}
//
//const allDeposit = (location, cb) => {
//  require.ensure([], require => {
//      cb(null, require('../Component/allDeposit').default)
//  },'allDeposit')
//}
//
//const applyRecord = (location, cb) => {
//  require.ensure([], require => {
//      cb(null, require('../Component/applyRecord').default)
//  },'applyRecord')
//}
//
//const applyDeposit = (location, cb) => {
//  require.ensure([], require => {
//      cb(null, require('../Component/applyDeposit').default)
//  },'applyDeposit')
//}

//<Route path="helpCenter" getComponent={helpCenter} />//帮助中心
//<Route path="saleRecord" getComponent={saleRecord} />//销售记录
//<Route path="chooseProducts" getComponent={chooseProducts} />//选择商品
//<Route path="allDeposit" getComponent={allDeposit} />//余额
//<Route path="applyDeposit" getComponent={applyDeposit} />//申请提现
//<Route path="applyRecord" getComponent={applyRecord} /> //提现记录

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Index} />//首页
            <Route path="Index" component={Index} />
            <Route path="TopicDetial" getComponent={TopicDetial} />
            <Route path="UserLogin"   getComponent={UserLogin} />
            <Route path="PostTopic"   getComponent={PostTopic} />
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;