import { call, put, takeEvery} from 'redux-saga/effects';
import { LOAD_ELEMENTS, RECEIVE_ELEMENTS } from '../actions/actions';
import { fetchElements } from '../api/api';

function* loadElements(action) {
  const { offset, limit } = action;
  try {
      const { elements, total } = yield call(fetchElements, limit, offset );
      yield put({ type: RECEIVE_ELEMENTS, elements, total });
  } catch (err) {
    console.log(err);
  }
}

function* appSaga() {
  yield takeEvery(LOAD_ELEMENTS, loadElements);
}

export default appSaga;
