import { Moment } from 'moment';

import { ADD_TWEET, DELETE_TWEET } from './actions';

export interface TweetDescription {
  tweet: string;
  date: Moment | null;
  time: Moment | null;
}

interface addTweet {
  type: typeof ADD_TWEET;
  payload: TweetDescription;
}

interface deleteTweet {
  type: typeof DELETE_TWEET;
  payload: Moment;
}

export type tweetTypes = addTweet | deleteTweet;
