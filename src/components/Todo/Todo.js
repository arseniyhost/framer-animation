import React from 'react';

const Todo = ({ text, setTodos, todos, todo, data }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => {
            return el.id !== todo.id
        }))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <div className="box-input">
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}<i className="data">{data}</i></li>
            </div>
            <div className="box-btn">
                <button onClick={completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default Todo
