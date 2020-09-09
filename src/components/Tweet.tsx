import React from 'react';
import moment, { Moment } from 'moment';
import { TweetDescription } from '../redux/types';
import { Button, Card } from 'antd';

interface TweetProps {
  tweet: TweetDescription;
  deleteTweet(time: Moment | null): void;
}

function Tweet({ tweet, deleteTweet }: TweetProps) {
  React.useEffect(() => {
    setInterval(() => {
      if (tweet.time?.format('YYYY MM DD') === moment().format('YYYY MM DD')) {
        if (tweet.time.hours() === moment().hours()) {
          if (tweet.time.minutes() === moment().minutes()) {
            deleteTweet(tweet.time);
          }
        }
      }
    }, 1000);
  }, [deleteTweet, tweet.time]);

  return (
    <Card className='margin-2' style={{ width: 300 }}>
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
