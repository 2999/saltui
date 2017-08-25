/**
 * Slide Component Demo for tingle
 * @author cm
 *
 * Copyright 2014-2017, Tingle Team.
 * All rights reserved.
 */
require('@ali/tingle-context');
window.FastClick && FastClick.attach(document.body);

// 插入svg
var IconSymbols = require('./svg/tingle-icon-symbols.svg');
ReactDOM.render(<IconSymbols/>, document.getElementById('TingleIconSymbols'));

// 渲染demo
var Demo = require('./SlideDemo');
ReactDOM.render(<Demo/>, document.getElementById('TingleDemo'));
