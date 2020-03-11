import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid';

class App extends Component {
  state={
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };

  handleChange = (e)=>{
    this.setState({
      item:e.target.value
    });
  };

  submitForm = (e) => {
    e.preventDefault();

    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items:updatedItems,
      item:'',
      id: uuid(),
      editItem: false
    });

  };

  clearAll = () => {
    this.setState({
      items: []
    });
  };
  
  deleteItem = (id) => {
    const listItems = this.state.items.filter(item=>item.id !== id);
    this.setState({
      items:listItems
    });
  };

  editItem = (id) => {
    const listItems = this.state.items.filter(item=>item.id !== id);

    const itemFound = this.state.items.find(item=> item.id === id);

    this.setState({
      items:listItems, 
      item: itemFound.title,
      editItem: true,
      id:id
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center"> Todo Input </h3>
            <TodoInput 
            item={this.state.item}  
            handleChange={this.handleChange} 
            submitForm={this.submitForm}
            editItem={this.state.editItem}
            />

            <TodoList items={this.state.items} 
            clearAll={this.clearAll} 
            deleteItem={this.deleteItem}
            editItem={this.editItem}
            />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
