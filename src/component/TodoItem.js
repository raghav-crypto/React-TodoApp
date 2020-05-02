import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    getStyle = () => {
        if (this.props.todo.completed){
            return {
                textDecoration: 'line-through',
                backgroundColor: '#b7efcd',
                color: '#024249'
            }
        }
        else {
            return {
                textDecoration: 'none'
            }
        }
    }        

    // getStyle = () => {
    //     return {
    //         textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    //     }
    // }

    render(){
        const { id, title} = this.props.todo;
        return (
            <div className='main' style={this.getStyle()}>
                <p>
                    <input style={checkBox} type='checkbox' onChange = {this.props.markComplete.bind(this, id)}/>
                </p>
                <h2>
                    {title}
                </h2>
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>                
        </div>
        )
    }
  
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: '#bb3b0e',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '30%',
    cursor: 'pointer',
    float: 'right'
}
const checkBox = {
    height: '25px',
    width: '25px'
}
export default TodoItem;