/**
 * SearchBar Component Demo for tingle
 * @author zhouquan.yezq
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
require('salt-context');
window.FastClick && FastClick.attach(document.body);

// 渲染demo
var Demo = require('./SearchBarDemo');
ReactDOM.render(<Demo/>, document.getElementById('TingleDemo'));
