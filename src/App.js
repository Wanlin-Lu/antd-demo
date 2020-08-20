import React from 'react';
import { Layout, Row, Col } from 'antd'
import Header from './layout-page/Header'
import Sider from './layout-page/Sider'
import Content from './layout-page/Content'
import Footer from './layout-page/Footer'

import './App.less';




function App() {
  return (
    <Layout>
      <Row>
        <Header />
      </Row>
      <Row>
        <Sider />
        <Content />
      </Row>
      <Footer />
    </Layout>
  );
}

export default App;