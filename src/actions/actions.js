export const RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS';
export const LOAD_ELEMENTS = 'LOAD_ELEMENTS';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const loadElements = (offset, limit) => {
  return  {
    type: LOAD_ELEMENTS,
    offset,
    limit,
  }
};

export const changePage = (activePage) => {
  return  {
    type: CHANGE_PAGE,
    activePage
  }
};
