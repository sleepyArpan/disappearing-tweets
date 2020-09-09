import { Moment } from 'moment';

export const ADD_TWEET = 'ADD_TWEET';
export const DELETE_TWEET = 'DELETE_TWEET';

export interface TweetDescription {
  tweet: string;
  date: Moment | null;
  time: Moment | null;
}
export interface addTweet {
  type: typeof ADD_TWEET;
  payload: TweetDescription;
}

export interface deleteTweet {
  type: typeof DELETE_TWEET;
  payload: Moment;
}

export function addTweet(tweet: TweetDescription): addTweet {
  return {
    type: ADD_TWEET,
    payload: tweet,
  };
}

export function deleteTweet(time: Moment): deleteTweet {
  return {
    type: DELETE_TWEET,
    payload: time,
  };
}
