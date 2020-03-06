import React from 'react'
import ListItem from '../components/ListItem'
import { FetchGet } from '../untils/request'
import { Row, Col } from 'antd'
import './index.css'

export default class Home extends React.Component{
  static async getInitialProps(ctx) {
    // 服务端代码
    let result = await FetchGet({url: 'http://127.0.0.1:7001/view/getArticleList'});
    // console.log(result, 'index数据')
    return { data: result.data }
  }

  render() {
    const { data } = this.props;
    return (
      <div className="container">
        <Row className="list-wrap" justify="space-between" gutter={30}>
        {
          data.map((item, i) => {
            return (
              <Col key={i} xs={24} sm={24} md={12} lg={12} xl={12}>
                <ListItem dataItem={item} />
              </Col>
            );
          })
        }
        </Row>
      </div>
    )
  }
}