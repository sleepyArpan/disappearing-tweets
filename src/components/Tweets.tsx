import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TweetState } from '../redux/reducer';
import { addTweet } from '../redux/actions';
import DateAndTimePicker from './DateAndTimePicker';
import TweetInput from './TweetInput';

function Tweets() {
  const tweets = useSelector<TweetState, TweetState['tweets']>(
    state => state.tweets
  );
  const dispatch = useDispatch();

  function onTweetAdd(tweet: string) {
    dispatch(addTweet(tweet));
  }

  return (
    <>
      <TweetInput addTweet={onTweetAdd} />
      <DateAndTimePicker />
      <ul>
        {tweets.map(tweet => (
          <li key={tweet}>{tweet}</li>
        ))}
      </ul>
    </>
  );
}

export default Tweets;
