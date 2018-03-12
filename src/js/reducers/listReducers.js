import  { ADD_ITEM, DEL_ITEM, INP_VAL } from '../constants';

const initial = {
  inputValue: "",
  listItems: []
};

export default function(state=initial, action) {
  switch(action.type) {
    case ADD_ITEM:
      return {...state, listItems: action.payload}
    case DEL_ITEM:
      return {...state, listItems: action.payload}
    case INP_VAL:
      return {...state, inputValue: action.payload}
  }
  return state;
}