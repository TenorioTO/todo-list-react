import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, submitForm, editItem} = this.props
        return (

            <div className="card card-body my-3">
                <form onSubmit={submitForm}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                               <i className="fas fa-book"></i> 
                            </div> 
                        </div>
                        <input type="text" className="form-control" 
                        placeholder="Todo Description..." 
                        value={item} 
                        onChange={handleChange} />
                    </div>
                    <button type="submit" 
                    className={editItem 
                    ? 'btn btn-block btn-success' 
                    : 'btn btn-block btn-primary'}>
                         {editItem ? 'Edit' : 'Add'}</button>
                </form>
            </div>
        )
    }
}