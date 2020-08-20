import React from 'react'
import { Layout, Col } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'


const Footer = () => {
  return (
    <Col span={24} >
      <Layout.Footer style={{ backgroundColor: "#002419", color: "#1DA57A", textAlign:"center" }}>
        Ant Design ©2018 Created by Ant UED
      </Layout.Footer>
    </Col>
  );
}

export default Footer