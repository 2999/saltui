/**
 * NavBar Component Demo for tingle
 * @author ruiyang.dry
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */

const classnames = require('classnames');
const Context = require('salt-context');

const NavBar = require('salt-nav-bar');

// build之后, 测试一下下面一行, 把上面一行注释掉
//const NavBar = require('../../dist');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            className: '',
            title: '我是标题我是标题',
            rightText: '更多',
            isShow: true
        }
    }
    handleOnLeftClick(){
        alert('返回事件')
    }
    handleOnRightClick(){
        alert('更多事件')
    }
    handleCloseViewClick(){
        alert('关闭webView事件')
    }
    render() {
        return <div>
            <NavBar className={this.state.className} title={this.state.title} isShow={this.state.isShow} onLeftClick={this.handleOnLeftClick.bind(this)}
             onRightClick={this.handleOnRightClick.bind(this)} closeViewClick={this.handleCloseViewClick.bind(this)} />
        </div>
    }
};

module.exports = Demo;
