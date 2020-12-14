/*
 * @Author: zhengxiaoxiao
 * @Date: 2020-12-14 17:42:42
 * @Description: 
 */
import React from 'react'
class TodoItem extends React.Component {
    constructor(props) {
        super(props);// 继承
        this.handleDel = this.handleDel.bind(this)
    }
    handleDel() {
        console.log( this.props," this.props")
        // const delete = this.props.delete;
        const index = this.props.content.index;
        this.props.delete (index);
    }
    render() {
        const { item, index } = this.props.content;
        return (
            <div onClick={this.handleDel}>{item} : {index}</div>
        )
    }
}
export default TodoItem;