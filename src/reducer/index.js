import { combineReducers } from 'redux';

import elements from './elements';
import total from './total';
import activePage from './activePage';

export default combineReducers({
  elements,
  total,
  activePage,
});
