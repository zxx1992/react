import React from 'react'

// 子传父亲
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childData: ""
    }
  }
  render() {
    return (
      <div>
        <Child setChildData={(data) => this.setChildData(data)}></Child>
        我是从子传过来的数据： {this.state.childData}
      </div>
    )
  }
  setChildData(data) {
    this.setState({
      childData: data
    })
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: "我是子的数据"
    }
  }
  onSendDate() {
    this.props.setChildData(this.state.msg)
  }
  onSubmit(e) {
    console.log(e,"e")
    // 阻止默认提交
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <button onClick={() => this.onSendDate()}>子发送数据给父亲</button>
        <form action="http://www.baidu.com">
          {/* <button onClick={(e) => this.onSubmit(e)}>提交1</button> */}
          <button onClick={function(e) {this.onSubmit(e)}.bind(this)}>提交2</button>
        </form>
      </div>
    )
  }
}

export default Parent;