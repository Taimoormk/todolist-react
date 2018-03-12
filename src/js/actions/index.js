import { ADD_ITEM, DEL_ITEM, INP_VAL } from '../constants';

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