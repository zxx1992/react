// import React from 'react';
// class Square extends React.Component {
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => {
//                     this.props.onClick()
//                 }}>
//                 {this.props.value}
//             </button>
//         )
//     }
// }


// 如果组件只包含一个render方法，并且不包含state,可以使用函数组件
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
export default Square