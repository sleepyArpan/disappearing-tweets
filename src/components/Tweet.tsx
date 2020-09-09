import React from 'react';
import { Moment } from 'moment';
import { TweetDescription } from '../redux/actions';
import { Button, Card } from 'antd';

interface TweetProps {
  tweet: TweetDescription;
  deleteTweet(time: Moment | null): void;
}

function Tweet({ tweet, deleteTweet }: TweetProps) {
  return (
    <Card style={{ width: 300 }}>
      <p>{tweet.tweet}</p>
      <p>Expiry Date and Time -</p>
      <p>
        {tweet.date?.format('MMM Do YY')} - {tweet?.time?.format('h:mm:ss a')}
      </p>
      <Button onClick={() => deleteTweet(tweet.time)}>Delete</Button>
    </Card>
  );
}

export default Tweet;
