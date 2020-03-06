import React from 'react'
import { Button } from 'antd'
import { FireOutlined } from '@ant-design/icons';
import './index.css'

class ListItem extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    const { dataItem } = this.props;
    console.log(dataItem,'data')
    return (
      <div className="list-item-wrap">
        <div className="item-img-box">
          <img className="item-img" src="1.jpg"></img>
          <div className="img-tag">
            <span className="tag-txt">{dataItem.typeName}</span>
            <span className="tag-quel"></span>
          </div>
        </div>
        <div className="rt-info">
            <h3 className="item-title">{dataItem.title}</h3>
            <div className="item-time">
              {dataItem.addTime}
            </div>
            <div className="item-introduce">{dataItem.introduce}</div>

            <div className="item-btns">
              <div className="item-view">
                <FireOutlined /><span className="txt">{dataItem.viewCount}</span>
              </div>
              <Button className="view-detail" type="primary">查看详情</Button>
            </div>
          </div>
      </div>
    )
  }
}

export default ListItem;