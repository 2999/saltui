/**
 * Card Component Demo for tingle
 * @author caiyongmin
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
const React = window.React;
const ReactDOM = window.ReactDOM;
require('@ali/tingle-context');

if (window.FastClick) {
  window.FastClick.attach(document.body);
}

// 渲染demo
const Demo = require('./CardDemo');

ReactDOM.render(<Demo />, document.getElementById('TingleDemo'));
