import React from "react";

// 定义组件
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick() {
      console.log(this.props,"props")
    const { onDel, index } = this.props;
    onDel(index);
  }
  render() {
      const { content} = this.props;
    return <div onClick={this.handleItemClick}>{content}</div>;
  }
}

export default Item;

//points
// 父-子
// 1 父组件通过属性的形式向子组件传递参数
// 2 子组件通过props接收参数

//子-父
// 3 子组件通过调用父组件的方法进行通信
