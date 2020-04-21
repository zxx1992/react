import React, { Component, Fragment } from "react";

// 引入子组件
import Item from "./components/Item";

// 定义组件
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["hello react"],
      inputVal: "",
    };
    // 改变this指向，提升性能
    this.handleInputVal = this.handleInputVal.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this);
  }
  // 点击按钮
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: "",
    });
  }
  // input框的val值
  handleInputVal(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }
  // 删除某一个li
  handleItemDel(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
  }
  // 获取li列表
  getItem() {
    return this.state.list.map((item, index) => {
      return (
        <Item
          key={index}
          content={item}
          index={index}
          onDel={this.handleItemDel}
        ></Item>
      );
    });
  }
  // 函数render
  render() {
    // jsx语法
    return (
      <Fragment>
        <input
          value={this.state.inputVal}
          onChange={this.handleInputVal}
        ></input>
        <button onClick={this.handleBtnClick}>Add</button>
        <ul>{this.getItem()}</ul>
      </Fragment>
    );
  }
}

export default App;
//难点
// 1 this指向
// 2 es6 语法，展开运算符
// 3 jsx语法
