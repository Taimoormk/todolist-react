import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {

  constructor() {
    super();
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

  render() {
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

App.PropTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(App);