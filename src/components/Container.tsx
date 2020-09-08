import React from 'react';
import { Layout, Typography } from 'antd';

function Container() {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;
  return (
    <Layout style={{ minHeight: '100vh', maxWidth: '1200px' }}>
      <Header style={{ color: 'whitesmoke', textAlign: 'center' }}>
        Header
      </Header>
      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          maxWidth: '100%',
        }}>
        <Title>Content</Title>
      </Content>
      <Footer style={{ background: 'gray', textAlign: 'center' }}>
        Footer
      </Footer>
    </Layout>
  );
}

export default Container;
