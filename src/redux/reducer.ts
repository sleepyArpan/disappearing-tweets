import { Moment } from 'moment';
import {
  deleteTweet,
  addTweet,
  ADD_TWEET,
  DELETE_TWEET,
  TweetDescription,
} from './actions';

export interface TweetState {
  tweets: TweetDescription[];
}

const initialState = {
  tweets: [],
};

function filterTweets(state: TweetState, time: Moment): TweetState {
  const stateToBeReturned = {
    ...state,
    tweets: state.tweets.filter(tweet => tweet.time !== time),
  };
  return stateToBeReturned;
}

export function reducer(
  state: TweetState = initialState,
  action: addTweet | deleteTweet
): TweetState {
  switch (action.type) {
    case ADD_TWEET:
      return {
        ...state,
        tweets: [...state.tweets, action.payload],
      };
    case DELETE_TWEET:
      const updatedState = filterTweets(state, action.payload);
      return updatedState;
    default:
      return state;
  }
}
