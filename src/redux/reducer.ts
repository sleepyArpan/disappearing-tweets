import { ACTION } from './actions';

export interface TweetState {
  tweets: string[];
}

const initialState = {
  tweets: [],
};

export function reducer(
  state: TweetState = initialState,
  action: ACTION
): TweetState {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        ...state,
        tweets: [...state.tweets, action.payload],
      };
    default:
      return state;
  }
}
