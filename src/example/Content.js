import React from 'react'
import RowOne from './RowOne'
import RowTwo from './RowTwo'

const map = new Map();
const list1 = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
];
const list2 = [
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
map.set("Sporting Goods", list1)
map.set("Electronics", list2)
class Content extends React.Component {
  render() {
    let showList = [];
    for (let [key, value] of map.entries()) {
      showList.push(<RowOne name={key}></RowOne>)
      for (let item of value) {
        showList.push(<RowTwo name={item.name} price={item.price}></RowTwo>)
      }
    }
    return (
      <div>
        {showList}
      </div>
    )
  }
}

export default Content;