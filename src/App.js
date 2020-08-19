import React from 'react';
import { Layout } from 'antd'
import Header from './layout-page/Header'
import Sider from './layout-page/Sider'
import Content from './layout-page/Content'
import Footer from './layout-page/Footer'

import './App.less';




function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Layout>
          <Sider />
          <Content />
        </Layout>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;