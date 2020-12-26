import React from "react"

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick() {
    this.props.onClick(this.props.index)
  }
  render() {
    return (
      <li className='liList' onClick={() => this.onClick()}>
        <span>{this.props.index}</span>
        <span>{this.props.item.name}</span>
        <span>{this.props.item.desc}</span>
      </li>
    )
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          index: "序号",
          name: "姓名",
          desc: "描述"
        },
        {
          index: "1",
          name: "zxx",
          desc: "zxx "
        },
        {
          index: "2",
          name: "lcc",
          desc: "lcc "
        },
        {
          index: "3",
          name: "lyy",
          desc: "lyy "
        }
      ]
    }
  }
  onAlert(index) {
    alert(index)
  }
  render() {
    // map 生成新的数组
    return (
      <div>
        <ul>
          {/* 这里可以直接内联map返回的新数组 */}
          {this.state.list.map((item, index) =>
            <Item item={item} key={index} index={item.index} onClick={(index) => this.onAlert(index)}></Item>
          )}
        </ul>
      </div>
    )
  }
}


// 数组遍历
let arr1 = [1, 2, 3, 4, 5];
// foreach相当于for循环
arr1.forEach((item, index, arr) => {
  console.log(item, index, arr, "1");
})

// map返回一个新数组
let arr2 = arr1.map((item, index) => {
  let newItem = item + index;
  return newItem;
})

console.log(arr2, "2")


// filter  过滤
let arr3 = arr1.filter(item => item > 2);
console.log(arr3, "3")

// reduce 对整个数据进行整合，比如要将数组中的数字进行相加，
let arr4 = arr1.reduce((pre, next, index) => {
  let result = pre + next;
  return result
})
console.log(arr4, "4")


// for  in   遍历对象

// for  of   遍历数组，类数组的对象，字符串，
export default List;

