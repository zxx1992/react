// 生命周期
// 钩子函数 
// CompontWillMount: 将要渲染
// ComponentDidMount: 组件渲染完毕
// Unmountign 组件移除

import React from 'react'
class Com extends React.Component {
  constructor(props) {
    super(props)
  }

  // render  为一个纯函数
  render() {
    return (
      <div>
        <p>{this.props.defau}</p>
        <p>{this.props.userId}</p>
        <button onClick={() => this.onChange()}>change</button>
      </div>
    )
  }
  onChange() {
    this.props.onClick()
  }
  // 有点像watch,
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot, "prevProps")
    if (prevProps.userId !== this.props.userId) {
      console.log("do something")
      this.props.onUpdate()
    }
  }
}
// defaultProps 可以为 Class 组件添加默认 props
Com.defaultProps = {
  defau: "morenzi"
}

class ComTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: "123"
    }
  }
  render() {
    return (
      <div>
        <Com userId={this.state.userId} onClick={() => this.onChange()} onUpdate={() => this.onUpdate()} />
        <div id="map">
          123
      </div>
      </div>
    )
  }
  onChange() {
    this.setState({
      userId: "234"
    })
    console.log(this.state.userId, "234444")
  }
  onUpdate() {
    console.log("更新数据")
  }
  // 与浏览器交互，可以在这里或其他生命周期中执行
  // componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用
  // 依赖于 DOM 节点的初始化应该放在这里。
  // 如需通过网络请求获取数据，此处是实例化请求的好地方。
  componentDidMount() {

  }
  // 如果添加了订阅，请不要忘记在 componentWillUnmount() 里取消订阅
  componentWillUnmount() {

  }

  // componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。
  componentDidUpdate() {
    let map = document.getElementById("map");
    console.log(map, this.state.userId, "2344445667")
  }
  // 如果 shouldComponentUpdate() 返回 false，则不会调用 render()。
  shouldComponentUpdate() {
    return true;
  }
}
export default ComTwo;