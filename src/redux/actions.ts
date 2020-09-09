import { Moment } from 'moment';

export const ADD_TWEET = 'ADD_TWEET';

export interface TweetDescription {
  tweet: string;
  date: Moment | null;
  time: Moment | null;
}
export interface ACTION {
  type: typeof ADD_TWEET;
  payload: TweetDescription;
}

export function addTweet(tweet: TweetDescription): ACTION {
  return {
    type: ADD_TWEET,
    payload: tweet,
  };
}
