import React from 'react'
import { Layout, Menu, Col } from 'antd'
import { PieChartOutlined } from '@ant-design/icons'

const { SubMenu } = Menu

const Sider = () => {
  return (
    <Col>
      <Layout.Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
        >
          <SubMenu key="sub1" icon={<PieChartOutlined />} title="通用">
            <Menu.Item key="1">
              <a href="/components/button-cn/">
                <span>Button</span>
                <span className="chinese">按钮</span>
              </a>
            </Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<PieChartOutlined />} title="布局">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<PieChartOutlined />} title="布局">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<PieChartOutlined />} title="布局">
            <Menu.Item key="12">Option 12</Menu.Item>
            <Menu.Item key="13">Option 13</Menu.Item>
            <Menu.Item key="14">Option 14</Menu.Item>
            <Menu.Item key="15">Option 15</Menu.Item>
          </SubMenu>
        </Menu>
      </Layout.Sider>
    </Col>
  );
}

export default Sider