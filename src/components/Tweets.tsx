import { DatePicker, TimePicker } from 'antd';
import moment, { Moment } from 'moment';
import React from 'react';

function Tweets() {
  console.log(moment().hour(), moment().minute());
  function disabledDate(current: Moment): boolean {
    return current <= moment().subtract(1, 'day');
  }

  function disabledHours(): Array<number> {
    let hours = [];
    for (let i = 0; i < moment().hour(); i++) {
      hours.push(i);
    }
    return hours;
  }

  function disabledMinutes(hour: number): Array<number> {
    let minutes: Array<number> = [];
    if (hour === moment().hour()) {
      for (let i = 0; i <= moment().minute(); i++) {
        minutes.push(i);
      }
    } else {
      for (let i = 0; i < 60; i++) {
        minutes.push(i);
      }
    }
    return minutes;
  }

  function handleChange(date: Moment | null, dateString: string): void {
    console.log(date, dateString);
  }

  function handleTimeChange(time: Moment | null, timeString: string): void {
    console.log(time, timeString);
  }

  return (
    <div className='flex'>
      <DatePicker
        size={'large'}
        disabledDate={disabledDate}
        onChange={handleChange}
      />
      <TimePicker
        size={'large'}
        format='HH:mm'
        onChange={handleTimeChange}
        disabledHours={disabledHours}
        disabledMinutes={disabledMinutes}
        hideDisabledOptions
      />
    </div>
  );
}

export default Tweets;
