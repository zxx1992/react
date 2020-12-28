import React from 'react'

function Zuhe(props) {
  return (
    <div className={props.color}>
      <div className="left">
        {props.left}
      </div>
      <div className="right">
        {props.right}
      </div>
      {props.children}
    </div>
  )
}

class WelcomeDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: "yiji"
    }
  }
  handleChange(e) {
    this.setState({
      msg: e.target.value
    })
  }
  handleSignUp() {
    alert("login success")
  }
  render() {
    return (
      // <Zuhe color="blue" left={<h1>组合使用</h1>} right={<p>试试 组合使用</p>}>

      // </Zuhe>
      <Zuhe left="welcomleft" right="welcomeright">
        <input vlaue={this.state.msg} onChange={(e) => { this.handleChange(e) }}></input>
        <button onClick={() => this.handleSignUp()}>sign me up</button>
      </Zuhe>
    )
  }
}


export default WelcomeDialog;