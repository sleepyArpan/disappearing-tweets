import React from 'react';
import { Layout } from 'antd';
import Tweets from './Tweets';

function Container() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className='container'>
      <Header className='nav-footer'>Disappearing Tweets</Header>
      <Content className='content'>
        <Tweets />
      </Content>
      <Footer className='nav-footer'>
        Made by{' '}
        <a
          href='https://github.com/sleepyArpan/disappearing-tweets'
          target='_blank'
          rel='noopener noreferrer'>
          Arpan Chattopadhyay
        </a>{' '}
        using React, Redux, TypeScript and Ant Design.
      </Footer>
    </Layout>
  );
}

export default Container;
