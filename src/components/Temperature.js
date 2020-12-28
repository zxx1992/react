
import React from 'react'

const scaleNames = {
  c: "Cel",
  f: "Fah"
}
class Temperature extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange(e) {
    this.props.onTemChange(e.target.value)
  }
  render() {
    return (
      <fieldset>
        <legend>{scaleNames[this.props.scale]}</legend>
        <input value={this.props.tempera} onChange={(e) => this.handleChange(e)}></input>
      </fieldset>
    )
  }
}
export default Temperature;