import React from 'react'

function UserGreat(props) {
  return (
    <h1>welcom</h1>
  )
}

function UserLogin(props) { 
  return (
    <h1>login in</h1>
  )
}


class XuanHoeme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    }
  }

  render() {
    let element;
    if (this.state.isLogin) {
      element = <UserGreat></UserGreat>
    } else {
      element = <UserLogin></UserLogin>
    }
    return (
      <div>
        <h1>header</h1>
        {element}
        <h1>footer</h1>
      </div>
    )
  }
}

export default XuanHoeme;