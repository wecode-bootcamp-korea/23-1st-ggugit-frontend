import React from 'react';

import './Timer.scss';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      countDown: '',
    };
  }

  setCountDown = () => {
    setInterval(() => {
      let date = new Date();

      let fullYear = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let dayCheck = new Date(fullYear, month, day, hours, minutes, seconds);

      let nextDay =
        dayCheck.getHours() < 7
          ? new Date(fullYear, month, day + 1, 7).getTime()
          : new Date(fullYear, month, day + 2, 7).getTime();

      let today = new Date(
        fullYear,
        month,
        day + 1,
        hours,
        minutes,
        seconds
      ).getTime();

      let countDown = nextDay - today;

      let countDownHours = Math.floor(countDown / (3600 * 1000));
      let countDownMinutes = Math.floor((countDown / (60 * 1000)) % 60);
      let countDownSeconds = Math.floor((countDown / 1000) % 60);

      this.setState({
        countDown: `${countDownHours} : ${countDownMinutes} : ${countDownSeconds}`,
      });
    }, 1000);
  };

  render() {
    const { countDown } = this.state;
    const date = new Date();
    const dayString = `${date.getMonth() + 1}월 ${date.getDate() + 1}일(${day(
      date.getDay() + 1
    )})`;

    this.setCountDown();
    // console.log(this.state);

    return (
      <div className="timerBox">
        <span className="orderNow">지금 주문하시면</span>
        <span className="deliveryDate">{dayString}에 받을 수 있어요.</span>
        <p className="deliveryNotice">
          오전 7시까지 주문하시면 다음날 배송됩니다.
        </p>
        <div className="timeRemaining">
          <span>남은시간</span>
          <span>{countDown}</span>
        </div>
      </div>
    );
  }
}

export default Timer;

const day = dayDate => {
  let days = ['일', '월', '화', '수', '목', '금', '토'];

  return days[dayDate];
};
