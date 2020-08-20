import React from 'react'
import { Button, Col, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const ButtonPage = () => {
  return (
    <React.Fragment>
      <Col>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Col>
      <Col>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
      </Col>
    </React.Fragment>
  );
}

export default ButtonPage