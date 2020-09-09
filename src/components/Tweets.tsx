import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TweetState } from '../redux/reducer';
import { TweetDescription } from '../redux/actions';
import { addTweet } from '../redux/actions';
import TweetInput from './TweetInput';
import Tweet from './Tweet';

function Tweets() {
  const tweets = useSelector<TweetState, TweetState['tweets']>(
    state => state.tweets
  );
  const dispatch = useDispatch();

  function onTweetAdd(tweet: TweetDescription) {
    dispatch(addTweet(tweet));
  }

  return (
    <>
      <TweetInput addTweet={onTweetAdd} />
      {tweets.map(tweet => (
        <Tweet key={tweet.time?.format('YYYY MM dd')} tweet={tweet} />
      ))}
    </>
  );
}

export default Tweets;
