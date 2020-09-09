import { Input, Button } from 'antd';
import React, { ChangeEvent } from 'react';

interface TweetInputProps {
  addTweet(tweet: string): void;
}

const TweetInput: React.FC<TweetInputProps> = ({ addTweet }) => {
  const [tweet, setTweet] = React.useState<string>('');

  function onTweetChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTweet(e.target.value);
  }

  function addTweetHandler() {
    addTweet(tweet);
    setTweet('');
  }
  return (
    <div className='width-50'>
      <Input.TextArea
        value={tweet}
        placeholder='Type in your tweet here'
        autoSize={{ minRows: 3, maxRows: 8 }}
        className='input-area'
        onChange={onTweetChange}
      />
      <Button onClick={addTweetHandler} type='primary'>
        Tweet
      </Button>
    </div>
  );
};

export default TweetInput;
