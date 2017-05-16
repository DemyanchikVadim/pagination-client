import {
  RECEIVE_ELEMENTS,
} from '../actions/actions';

const total = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ELEMENTS:
      return action.total;
    default:
      return state;
  }
};

export default total;
