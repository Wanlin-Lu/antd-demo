import React from 'react'
import { Col, Tooltip } from 'antd'
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  StepBackwardFilled,
  StepForwardFilled,
  AccountBookTwoTone,
  AlertTwoTone,
} from '@ant-design/icons'

const IconsPage = () => {
  return (
    <React.Fragment>
      <Col>
        <StepBackwardOutlined />
        <StepForwardOutlined />
      </Col>
      <Col>
        <Tooltip title="step back">
          <StepBackwardFilled />
        </Tooltip>
        <StepForwardFilled />
      </Col>
      <Col>
        <AccountBookTwoTone />
        <AlertTwoTone />
      </Col>
    </React.Fragment>
  );
}

export default IconsPage