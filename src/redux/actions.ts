import { Moment } from 'moment';
import { TweetDescription, tweetTypes } from './types';

export const ADD_TWEET = 'ADD_TWEET';
export const DELETE_TWEET = 'DELETE_TWEET';

export function addTweet(tweet: TweetDescription): tweetTypes {
  return {
    type: ADD_TWEET,
    payload: tweet,
  };
}

export function deleteTweet(time: Moment): tweetTypes {
  return {
    type: DELETE_TWEET,
    payload: time,
  };
}
