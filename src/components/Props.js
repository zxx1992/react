import React, { Children } from "React";

// 父传子
class PropsParent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
  }
  onChange() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => {this.onChange()}}>toggle</button>
        <Child isShow={this.state.isShow}></Child>
      </div>
    )
  }
}

class Child extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    let show = this.props.isShow ? "block" : "none";
    return (
      <div style={{display: show}}>child</div>
    )
  }
}

export default PropsParent