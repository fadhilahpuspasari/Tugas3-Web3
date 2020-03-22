import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Card, Row } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import '../src/assets/css/App.css';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const cardData = [
  {
    nama : "Fadpus",
    job : "Athlete"
  },
  {
    nama : "Puspa",
    job : "Singer"
  },
  {
    nama : "Fadhilah",
    job : "Guitarist"
  },
  {
    nama : "Puspasari",
    job : "Song Writer"
  }
]

function App() {
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                Profile
              </span>
            }
          >
            <Menu.Item key="1">Hobbies</Menu.Item>
            <Menu.Item key="2">Partners</Menu.Item>
            <Menu.Item key="3">Family</Menu.Item>
            <Menu.Item key="4">House</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <LaptopOutlined />
                Videos
              </span>
            }
          >
            <Menu.Item key="5">Cover Song</Menu.Item>
            <Menu.Item key="6">Animals</Menu.Item>
            <Menu.Item key="7">Guitar</Menu.Item>
            <Menu.Item key="8">Sports</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <NotificationOutlined />
                Notifications
              </span>
            }
          >
            <Menu.Item key="9">Work</Menu.Item>
            <Menu.Item key="10">Healthy</Menu.Item>
            <Menu.Item key="11">Praying</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ margin: 50 }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <div className="site-card-wrapper">
    <Row gutter={16}>
      <div className="App">
      {
        cardData.map( data =>
          <Card title={data.nama} bordered={true} style={{ margin:10,display:'inline-block', width: 300 }}>
            <p>{data.job}</p>
          </Card>
      )
    }
    </div>
    </Row>
  </div>,
  
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>FP ©2018 Created by Fadhilah Puspasari</Footer>
      </Layout>
    </Layout>
  </Layout>

  );
}

export default App;

