import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const {items, clearAll, deleteItem, editItem} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-center text-capitalize">List </h3>

                {
                    items.map(item => {
                        return (
                            <TodoItem key={item.id}  
                            title={item.title}
                            deleteItem={() => deleteItem(item.id)}
                            editItem={() => editItem(item.id)}/>
                        )
                    })
                }
                

                <button type="button" className="btn btn-block btn-danger mt-3" onClick={clearAll}>Clear</button>
            </ul>
        )
    }
}
