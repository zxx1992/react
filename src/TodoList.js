/*
 * @Author: zhengxiaoxiao
 * @Date: 2020-12-14 15:16:21
 * @Description: 
 */
import React from 'react';
import TodoItem from './TodoItem'
// 定义一个react组件
class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputVal: ''
    }
  }
  // methods;
  handleBtnClick() {
    console.log("click");
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ""
    })
  }
  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value
    })
    console.log(e.target.value);
  }
  handleDel(index) {
    const list = [...this.state.list];
    list.splice(index, 1)
    this.setState({
      list: list
    })
    console.log(index, "index")
  }
  // render 

  // 父组件通过属性的方式向子组件传递参数和方法； 子组件通过props接受父组件传递过来的参数；
  render() {
    // 标签结构： jsx语法
    let items = this.state.list.map((item, index) => {
      return (<TodoItem delete={() => this.handleDel()} key={index} content={{ item: item, index: index, }}></TodoItem>)
    })
    return (
      <div>
        <input value={this.state.inputVal} onChange={() => this.handleInputChange()}></input>
        <button onClick={() => this.handleBtnClick()}>add</button>
        <ul>{items}
        </ul>
      </div>
    )
  }
}
export default Todolist;
