import React from 'react';
import { Moment } from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import { TweetState, TweetDescription } from '../redux/types';
import { addTweet, deleteTweet } from '../redux/actions';
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

  function onTweetDelete(time: Moment) {
    dispatch(deleteTweet(time));
  }

  return (
    <>
      <TweetInput addTweet={onTweetAdd} />
      {tweets.map(tweet => (
        <Tweet
          key={tweet.time?.format('YYYY MM dd')}
          tweet={tweet}
          deleteTweet={onTweetDelete}
        />
      ))}
    </>
  );
}

export default Tweets;
