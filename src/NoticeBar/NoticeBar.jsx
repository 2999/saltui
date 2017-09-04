/**
 * NoticeBar Component for tingle
 * @author ruiyang.dry
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
import React from 'react';
import classnames from 'classnames';
import Context from '@ali/tingle-context';
import InfoRoundIcon from '@ali/tingle-icon/lib/InfoRound';
import CheckRoundIcon from '@ali/tingle-icon/lib/CheckRound';
import CrossRoundIcon from '@ali/tingle-icon/lib/CrossRound';
import DirectionRightIcon from '@ali/tingle-icon/lib/DirectionRight';
import CrossIcon from '@ali/tingle-icon/lib/Cross';
import Animate from 'rc-animate';

class NoticeBar extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    visible: React.PropTypes.bool,
    optionsType: React.PropTypes.string,
    onClose: React.PropTypes.func,
    onClick: React.PropTypes.func,
  };

  static defaultProps = {
    type: 'info',
    className: '',
    message: '',
    optionsType: '',
    visible: true,
    onClose: () => { },
  };

  static displayName = 'NoticeBar';

  handleClose(e) {
    this.props.onClose(this, e);
  }

  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(this, e);
    }
  }

  renderContent() {
    const t = this;
    const iconMap = {
      info: 'notice-info',
      success: 'notice-success',
      error: 'notice-error',
      warning: 'notice-warning',
    };
    const { type, message, optionsType } = t.props;
    const iconClassName = iconMap[type];
    let iconName;
    if (type === 'info' || type === 'warning') {
      iconName = <InfoRoundIcon width={18} height={18} fill="#fff" className={"icon-custom-class"} />;
    } else if (type === 'success') {
      iconName = <CheckRoundIcon width={18} height={18} fill="#fff" className={"icon-custom-class"} />;
    } else if (type === 'error') {
      iconName = <CrossRoundIcon width={18} height={18} fill={"#fff"} className={"icon-custom-class"} />;
    }
    return (
      <div
        className={classnames(Context.prefixClass('FBH notice-bar-content'), {
          [iconClassName]: !!iconClassName,
        })}
      >
        <div className="notice-icon">{iconName}</div>
        <span className="notice-content-message">{message}</span>
        {optionsType ? t.renderOptions() : null}
      </div>
    );
  }

  renderOptions() {
    const t = this;
    const { optionsType } = t.props;
    // 目前type 分为jumpto、close 等;
    if (optionsType === 'jumpto') {
      return (<div className="notice-options notice-direction">
        <DirectionRightIcon width={18} height={18} fill="#fff" className="icon-custom-class" />
      </div>);
    } else if (optionsType === 'close') {
      return (<div className="notice-options notice-cross">
        <CrossIcon width={18} height={18} fill="#fff" className="icon-custom-class" onClick={(e) => { t.handleClose(e); }} />
      </div>);
    }
    return null;
  }

  render() {
    const t = this;
    const { className, visible } = this.props;
    const content = t.renderContent();
    const dom = (
      <div
        className={classnames(Context.prefixClass('notice-bar'), {
          [className]: !!className,
        })} onClick={(e) => { t.handleClick(e); }}
      >
        {content}
      </div>
    );
    return (
      <Animate
        transitionName={Context.prefixClass('notice-bar-fade')}
        transitionAppear
      >
        {visible ? dom : null}
      </Animate>
    );
  }
}

export default NoticeBar;
