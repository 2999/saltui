/**
 * Calendar Component for tingle
 * @author quanyun.mqy
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
import React from 'react';
import classnames from 'classnames';
import Context from '@ali/tingle-context';
import cloneDeep from 'lodash/cloneDeep';
import WeekBar from './WeekBar';
import Panel from './Panel';
import CascadePanel from './CascadePanel';
import TopBar from '../TopBar';

const prefixClass = Context.prefixClass;

class DayCalendar extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    locale: React.PropTypes.string, // 国际化语言
    viewMode: React.PropTypes.string,
    singleMode: React.PropTypes.bool, // 是否是单选模式
    onChange: React.PropTypes.func,
  };

  static defaultProps = {
    locale: 'zh-cn',
    viewMode: 'slide', //  slide | popup
    singleMode: true,
    onChange: () => {},
  };

  static displayName = 'DayCalendar';

  constructor(props) {
    super(props);
    this.height = props.viewMode === 'popup' ? 446 : document.documentElement.clientHeight;
    this.value = cloneDeep(props.value);
  }

  onTopBarOk() {
    this.props.onOk(this.value);
  }

  onChange(value) {
    this.value = value;
    this.props.onChange(value);
  }

  render() {
    const t = this;
    const { className, ...others } = t.props;
    const paneHeight = t.height - 28;
    return (
      <div
        ref={(r) => { this.root = r; }}
        className={classnames(prefixClass('calendar day-calendar FBV'), {
          [className]: !!className,
        })}
      >
        {
          t.props.viewMode === 'popup' &&
            <TopBar {...t.props} onOk={() => { t.onTopBarOk(); }} />
        }
        <WeekBar locale={t.props.locale} />
        {
          t.props.singleMode ?
            <Panel
              className={prefixClass('FB1')}
              {...others}
              height={paneHeight}
              onChange={(value) => { t.onChange(value); }}
            /> :
            <CascadePanel
              className={prefixClass('FB1')}
              {...others}
              height={paneHeight}
              onChange={(value) => { t.onChange(value); }}
            />
        }
      </div>
    );
  }
}

export default DayCalendar;
