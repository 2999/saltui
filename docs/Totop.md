# tingle-totop [![tnpm version](http://web.npm.alibaba-inc.com/badge/v/@ali/tingle-totop.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@ali/tingle-totop)
一句话描述
一张截图

## How to develop

### install

```bash
tnpm i salt-tools -g
npm run tnpm-dep 
npm start
```

### update

```bash
npm run tnpm-update
```

## Simple Usage
```javascript
<Totop
  showPosition={[100]}
  hide={t.state.hide}
  debounceNum={300}
  ref={(c) => { this.totop = c; }}
  distance={100}
  duration={100}
  customChildren={false}
  children={[<Box className="test" size="mcircle"><Icon name="totop" /></Box>, <Box><Icon name="totop" /></Box>]}
  to={100}
  size="medium"
  type="primary"
/>
```


## API

* toTop(): 返回顶部

### Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className|string|optional|-|额外的顶级类名|
|to|number|optional|10|回到顶部时据顶端距离，单位 px|
|distance|number|optional|30|向下滑多少距离出现回到顶部，单位 px|
|duration|number|optional|600|动画持续时间，值为0位立即到达顶部|
|hideToTopButton|bool|optional|true|是否显示返回顶部按钮|
|icon|React.Element|optional|替换返回顶部的按钮，推荐使用 `tingle-icon`|
|size|number|optional|medium|按钮的尺寸，枚举值 `medium (48px)`, `small (40px)`|
|type| string | optional | `secondary` | 按钮的类型，枚举值 `primary`, `secondary` | 

### Box.Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className| string | optional | | 额外类名 | 
|size|number|optional|medium|同上|
|type| string | optional | primary | 同上 | 
|onClick| | func | optional | 点击按钮时的回调 | 


### API
- toTop

## Links

- [Issues](http://gitlab.alibaba-inc.com/tingle-ui/tingle-totop/issues)
- [README 标准写法](http://gitlab.alibaba-inc.com/tingle-ui/doc/blob/master/README%E6%A0%87%E5%87%86%E5%86%99%E6%B3%95.md)
- [视觉稿地址](http://axure.alibaba-inc.com/lark/5922a99caa847ea271c4cf87/index)
