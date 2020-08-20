import React from 'react'
import { Layout, Button, Col } from 'antd'
import { SmileTwoTone } from "@ant-design/icons";

import './style.css'

const Header = () => {
  return (
    <Col
      span={24}
    >
      <Layout.Header>
        <div className="logo">
          <SmileTwoTone className="logo-icon" twoToneColor="#226622" />
          Antd
        </div>
        <div className="auth">
          <span className="username">Wanlin-Lu</span>
          <Button
            type="primary"
            shape="round"
            size="small"
            className="auth-button"
          >
            Logout
          </Button>
        </div>
      </Layout.Header>
    </Col>
  );
}

export default Header