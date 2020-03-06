import React from 'react';
import Link from 'next/link'
import { Menu, Row, Col, Button, Avatar } from 'antd';
import { HomeOutlined, Html5Outlined, CoffeeOutlined, YoutubeOutlined,
} from '@ant-design/icons';

import './index.css'


class MyHeader extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      current: 'home',
      collapsed: false
    }
  }
  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <div className="header">
        <Row className="row">
          <Col xs={20} sm={20} md={12} lg={12} xl={12} className="flex-left">
            <div className="flex-left header-left">
              <Avatar className="logo" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <h3 className="slogan">伊禅，爱技术胜过爱自己</h3>
            </div>
          </Col>
          <Col xs={4} sm={4} md={12} lg={12} xl={12}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="home">
                <HomeOutlined style={{ fontSize: '16px' }} />
                <Link href="/">
                  <a className="inline">首页</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="html5">
                <Html5Outlined style={{ fontSize: '16px' }} />
                <Link href="/tech">
                  <a className="inline">技术文章</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="coffee">
                <CoffeeOutlined style={{ fontSize: '16px' }} />
                <Link href="/share">
                  <a className="inline">生活分享</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="like">
                <YoutubeOutlined style={{ fontSize: '16px' }} />
                <Link href="/like">
                  <a className="inline">兴趣爱好</a>
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MyHeader