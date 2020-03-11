import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const {title, deleteItem, editItem} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div>
                    <span className="mx-2 text-success" onClick={editItem}> <i className="fas fa-pen"></i></span>
                    <span className="mx-2 text-danger" onClick={deleteItem}> <i className="fas fa-trash"></i></span>
                </div>
            </li>
        )
    }
}
