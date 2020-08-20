import React from 'react';
import { Row } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'
import Header from './layout-page/Header'
import './App.less';
import Sider from './layout-page/Sider'
import Content from './layout-page/Content'
import Footer from './layout-page/Footer'

function App() {
  return (
    <React.Fragment>
      <Row>
        <Header />
      </Row>
      <Row>
        <Sider />
        <Content />
      </Row>
      <Row>
        <Footer />
      </Row>
    </React.Fragment>
  );
}

export default App;