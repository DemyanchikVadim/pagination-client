import {
  RECEIVE_ELEMENTS,
} from '../actions/actions';

const elements = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ELEMENTS:
      return action.elements;
    default:
      return state;
  }
};

export default elements;
