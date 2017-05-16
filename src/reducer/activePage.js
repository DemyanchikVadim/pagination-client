import {
  CHANGE_PAGE,
} from '../actions/actions';

const activePage = (state = 1, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.activePage;
    default:
      return state;
  }
};

export default activePage;
