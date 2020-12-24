function Clock(props) {
  // let element1 = <h1>当前时间{props.time.toLocaleTimeString()}</h1>
  let man = "发热1";
  // class样式
  let e4Class = ['bgColor', 'fontSize'].join(" ");
  let element4 = (
    <div className={e4Class}>
      <span>躺尸1</span>
      <span>躺尸2</span>
    </div>
  )
  console.log(element4,"element4")
  // style 样式
  let e2Style = {
    borderBottom: "5px solid pink"
  };
  let element2 = (
    <div style={e2Style} className={e4Class}>
      <h1>今天是否隔离</h1>
      <h2>{man === '发热' ? <button>隔离</button> : element4}</h2>
    </div>
  )
  return element2;
}

export default Clock