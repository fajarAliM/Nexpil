import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../store/reducers';
import mySaga from './patientsSaga';

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySaga)
