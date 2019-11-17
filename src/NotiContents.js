import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
 
import Notifications, { success, info, removeAll } from 'react-notification-system-redux';

// 외부에서 값 변경으로 Noti 색을 변하게 하려고 만듬
var checkpoint = 2;

// Notification 안에 들어가는 내용
//const notificationOpts = {
var notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Student is sleeping!',
  message: 'Let\'s wake up!!',
  position: 'br',
  autoDismiss: 0,
  action: {
    label: 'Check!!'
    //callback: () => alert('clicked!')
  }
};
 
class NotiContents extends React.Component {
 
  constructor(props) {
    super(props);
 
    this.handleClick = this.handleClick.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  dispatchNotification(fn, timeout) {
    setTimeout(() => {
      fn(notificationOpts);
    }, timeout);
  }
 
  handleClick() {
    const { success, error, warning, info, removeAll } = this.props;
    if (checkpoint == 1) {
      this.dispatchNotification(success, 250);
    } else {
      this.dispatchNotification(info, 250);
    }
  }
 
  handleRemoveAll() {
    this.props.removeAll();
  }

  render() {
      const {notifications} = this.props;

    // 디버깅용 onClick 버튼
    return (
      <div>
        <button onClick={this.handleClick}>Spawn some</button>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        <Notifications notifications={notifications} />
      </div>
    );
  }
}

// Data 타입 검증
NotiContents.propTypes = {
    info: PropTypes.func.isRequired,
    notifications: PropTypes.array,
    removeAll: PropTypes.func.isRequired,
    success: PropTypes.func.isRequired
};
 
export default connect(
    state => ({ notifications: state.notifications }),
    {
      success, info, removeAll
    }
  )(NotiContents);