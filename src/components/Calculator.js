import React from "react"
import Temperature from "./Temperature"

function toC(f) {
  return (f - 32) * 5 / 9
}

function toF(c) {
  return (c * 9 / 5) - 32
}
function tryConvert(tem, convert) {
  const input = parseFloat(tem);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tempera: "",
      scale: "c"
    }
  }
  handleTemC(tempera) {
    this.setState({
      tempera,
      scale: "c"
    })
  }
  handleTemF(tempera) {
    console.log(tempera, "temperaffff")
    this.setState({
      tempera,
      scale: "f"
    })
  }
  render() {

    const tem = this.state.tempera;
    const scale = this.state.scale;
    const c = scale === "c" ? tryConvert(tem, toF) : tem;
    const f = scale === "f" ? tryConvert(tem, toC) : tem;
    console.log(c, f, "cf")
    return (
      <div>
        <Temperature scale="c" tempera={f} onTemChange={(data) => { this.handleTemC(data) }}></Temperature>
        <Temperature scale="f" tempera={c} onTemChange={(data) => { this.handleTemF(data) }}></Temperature>
      </div>
    )
  }
}

export default Calculator;