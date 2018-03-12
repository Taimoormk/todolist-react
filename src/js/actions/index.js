import { ADD_ITEM, DEL_ITEM, INP_VAL, COM_ITEM } from '../constants';

export function addListItemAction(listItems) {
  return {
    type: ADD_ITEM,
    payload: listItems
  };
};

export function removeListItemAction(listItems) {
  return {
    type: DEL_ITEM,
    payload: listItems
  };
};

export function inputValueAction(value) {
  return {
    type: INP_VAL,
    payload: value
  };
};

export function completeListItemAction(listItems) {
  return {
    type: COM_ITEM,
    payload: listItems
  };
};