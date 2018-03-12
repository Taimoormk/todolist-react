import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {

  constructor() {
    super();
  }

  render() {
    let { listItem, index, id, removeListItem } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td className={listItem.completed ? "completed" : ""}>{listItem.itemValue}</td>
        <td>
          <button className="btn btn-success">Completed</button>
          <button type="button" className="btn btn-primary">
            Shift <span className="glypicon glyphicon-menu-up"></span>
          </button>
          <button type="button" className="btn btn-primary">
            Shift <span className="glypicon glyphicon-menu-down"></span>
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>removeListItem(listItem.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

ListItem.propTypes = {
}

export default ListItem;