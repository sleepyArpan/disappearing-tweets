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
      <Footer className='nav-footer'>Footer</Footer>
    </Layout>
  );
}

export default Container;
