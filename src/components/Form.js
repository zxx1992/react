import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      value2: "",
      value3: ""
    }
  }

  handleChange(e) {
    console.log(e.target, "ee")
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    alert(this.state.value + " " + this.state.value2 + " " + this.state.value3, "val")
    e.preventDefault()
  }
  render() {
    return (
      <form className={'form'} onSubmit={(e) => { this.handleSubmit(e) }}>
        <label>名字：<input name="value" type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}></input></label>
        <label>描述：<textarea name="value2" value={this.state.value2} onChange={(e) => this.handleChange(e)}></textarea></label>
        <label>喜欢：<select name="value3" value={this.state.value3} onChange={(e) => this.handleChange(e)}>
          <option value="apple">apple</option>
          <option value="pear">pear</option>
          <option value="peach">peach</option>
        </select></label>

        <input type="submit" value="提交"></input>
      </form>
    )
  }
}


export default NameForm;