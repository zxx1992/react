import React from "React";
class Yeye extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yeye: "我是爷爷"
    }
  }
  render() {
    return (
      <PropsParent yeye={this.state.yeye}></PropsParent>
    )
  }
}

// 父传子
class PropsParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      parent: "我是父亲"
    }
  }
  // setState可能是异步的，所以如果要更新的值包括props,和state， 可以用回调函数
  onChange() {
    this.setState((state, props) => ({
      isShow: !state.isShow,
      parent: state.parent + props.yeye
    }))
  }
  render() {
    return (
      <div>
        <button onClick={() => { this.onChange() }}>toggle</button>
        <Child isShow={this.state.isShow} zhangbei={this.state.parent}></Child>
      </div>
    )
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      child: "xx"
    }
  }

  render() {
    let show = this.props.isShow ? "block" : "none";
    return (
      <div>
        {/* 这里的zhangbei，不知道是PropsParent中的state, 还是props */}
        <div>{this.props.zhangbei}</div>
        <div style={{ display: show }}>child</div>
      </div>
    )
  }
}

export default Yeye