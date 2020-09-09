import { Moment } from 'moment';

import { ADD_TWEET, DELETE_TWEET } from './actions';
import { tweetTypes, TweetState } from './types';

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
  action: tweetTypes
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
