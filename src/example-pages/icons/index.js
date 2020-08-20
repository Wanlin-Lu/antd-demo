import React from 'react'
import { Col, Tooltip } from 'antd'
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  StepBackwardFilled,
  StepForwardFilled,
  AccountBookTwoTone,
  AlertTwoTone,
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

import './style.less'

const IconsPage = () => {
  return (
    <React.Fragment>
      <Col className="icons-list">
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
        <StepBackwardOutlined />
        <StepForwardOutlined />
      </Col>
      <Col className="icons-list">
        <Tooltip title="step back">
          <StepBackwardFilled />
        </Tooltip>
        <StepForwardFilled />
        <SmileTwoTone />
        <HeartTwoTone twoToneColor="#eb2f96" />
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      </Col>
      <Col className="icons-list">
        <AccountBookTwoTone />
        <AlertTwoTone />
      </Col>
    </React.Fragment>
  );
}

export default IconsPage