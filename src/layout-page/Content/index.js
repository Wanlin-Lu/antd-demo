import React from 'react'
import { Layout, Row, Col } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import ButtonPage from '../../example-pages/button'
import IconsPage from '../../example-pages/icons'
import TypographyPage from '../../example-pages/typography'


const Content = () => {
  return (
    <Col span={20} flex={1}>
      <Layout.Content style={{ padding: "18px 15px" }}>
        <Row gutter={[16, 16]} justify="space-around">
          <ButtonPage />
        </Row>
        <Row gutter={[16, 16]} justify="center">
          <IconsPage />
        </Row>
        <Row gutter={[16, 16]} justify="space-around">
          <TypographyPage />
        </Row>
      </Layout.Content>
    </Col>
  );
}

export default Content