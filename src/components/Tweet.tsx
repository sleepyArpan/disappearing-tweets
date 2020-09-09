import React from 'react';
import { TweetDescription } from '../redux/actions';
import { Card } from 'antd';

interface TweetProps {
  tweet: TweetDescription;
}

function Tweet({ tweet }: TweetProps) {
  return (
    <Card style={{ width: 300 }}>
      <p>{tweet.tweet}</p>
      <p>
        Expiry Date and Time - {tweet.date?.format('MMM Do YY')} -{' '}
        {tweet?.time?.format('h:mm:ss a')}
      </p>
    </Card>
  );
}

export default Tweet;
