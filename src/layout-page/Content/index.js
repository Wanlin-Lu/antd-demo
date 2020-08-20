import React from 'react'
import { Layout, Row, Col } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import ButtonPage from '../../example-pages/button'
import IconsPage from '../../example-pages/icons'


const Content = () => {
  return (
    <Layout.Content style={{ padding: "18px 15px" }}>
      <Row gutter={[16, 16]} justify="space-around">
        <ButtonPage />
      </Row>
      <Row gutter={[16, 16]} justify="center">
        <IconsPage />
      </Row>
    </Layout.Content>
  );
}

export default Content