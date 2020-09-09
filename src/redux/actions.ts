export type ACTION = {
  type: 'ADD_TWEET';
  payload: string;
};

export function addTweet(tweet: string): ACTION {
  return {
    type: 'ADD_TWEET',
    payload: tweet,
  };
}
