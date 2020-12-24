import React from "React";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = (
      {
        isActive: true
      }
    )

  }
  onHandleOne() {
    this.setState({
      isActive: true
    })
  }
  onHandleTwo(e) {
    console.log(e,"e")
    this.setState({
      isActive: false
    })
  }
  render() {
    let desc = this.state.isActive ? <span>one content</span> : <span>two content</span>;
    return (
      <div>
        <button onClick={() => this.onHandleOne()}>button one</button>
        <button onClick={() => this.onHandleTwo()}>button two</button>
        {/* 这里箭头函数记得写（） */}
        <div>
          {desc}
        </div>
      </div>
    )
  }
}

export default Tab;