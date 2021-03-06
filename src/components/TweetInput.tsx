import moment, { Moment } from 'moment';
import React, { ChangeEvent } from 'react';
import { Input, Button, DatePicker, TimePicker } from 'antd';

import { TweetDescription } from '../redux/types';

interface TweetInputProps {
  addTweet(tweet: TweetDescription): void;
}

function TweetInput({ addTweet }: TweetInputProps) {
  const [tweet, setTweet] = React.useState<string>('');
  const [date, setDate] = React.useState<Moment | null>(null);
  const [time, setTime] = React.useState<Moment | null>(null);

  function onTweetChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTweet(e.target.value);
  }

  function addTweetHandler(): void {
    if (tweet === '' || date === null || time === null) {
      return;
    }
    const storeTweet = { tweet, date, time };
    addTweet(storeTweet);
    setTweet('');
    setDate(null);
    setTime(null);
  }

  function disabledDate(current: Moment): boolean {
    return current <= moment().subtract(1, 'day');
  }

  function disabledHours(): number[] {
    let hours = [];
    for (let i = 0; i < moment().hour(); i++) {
      hours.push(i);
    }
    return hours;
  }

  function disabledMinutes(hour: number): number[] {
    let minutes: number[] = [];
    if (hour === moment().hour()) {
      for (let i = 0; i <= moment().minute(); i++) {
        minutes.push(i);
      }
    }
    return minutes;
  }

  function handleDateChange(date: Moment | null) {
    setDate(date);
  }

  function handleTimeChange(time: Moment | null) {
    setTime(time);
  }

  return (
    <>
      <div className='width-50 margin-4'>
        <Input.TextArea
          value={tweet}
          placeholder='Type in your tweet here'
          autoSize={{ minRows: 3, maxRows: 8 }}
          className='input-area'
          onChange={onTweetChange}
        />
      </div>
      <div className='flex margin-4'>
        <DatePicker
          size={'large'}
          disabledDate={disabledDate}
          onChange={handleDateChange}
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
      <Button onClick={addTweetHandler} type='primary'>
        Tweet
      </Button>
    </>
  );
}

export default TweetInput;
