import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addListItemAction, removeListItemAction, inputValueAction } from '../actions'
import ListItem from './ListItem';

class App extends Component {

  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
  }

changeHandler(e) {
    let { inputValue, inputValueAction } = this.props;
    inputValue = e.target.value;
    inputValueAction(inputValue);
  }

  addListItem(e) {
    e.preventDefault();
    let { listItems, inputValue, addListItemAction, inputValueAction } = this.props;
    var item = {
      id: Math.random(),
      itemValue: inputValue,
      completed: false
    };
    listItems = listItems.concat(item);
    addListItemAction(listItems);
    inputValueAction('');
  }

  removeListItem(id) {
    let { listItems, removeListItemAction } = this.props;
    listItems = listItems.filter((item)=>{
      return item.id !== id;
    });
    removeListItemAction(listItems);
  }

  render() {
    let { listItems, inputValue } = this.props;
    const  listItemComponents = listItems.map((item, index)=> {
      return (
        <ListItem 
          removeListItem={this.removeListItem}
          listItem={item}
          key={index}
          index={index}
        />
      );
    });

    return (
      <div className="container app">
        <h1>ToDo List with React-Redux framework</h1>
        <hr />
        <form>
          <div className="form-group">
            <label htmlFor="list-item-input">New ToDo Item</label>
            <input 
              type="text"
              className="form-control"
              id="list-item-input"
              placeholder="Type your item"
              onChange={this.changeHandler}
              value={inputValue}
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
            onClick={this.addListItem}
          >
            Submit
          </button>
        </form>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Items</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listItemComponents}
          </tbody>
        </table>
      </div>
    );
  }
}

App.propTypes = {
}

function mapStateToProps(state) {
  return {
    listItems: state.list.listItems,
    inputValue: state.list.inputValue
  };
};

export default connect(mapStateToProps, {addListItemAction, removeListItemAction, inputValueAction})(App);