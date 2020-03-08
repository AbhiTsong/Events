import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import watcherSaga from './Saga/index';

import { UserReducer} from './Reducers/SignUpReducer';
// import {} from './Reducers/SignUpReducer';

const rootReducer = combineReducers({
 User: UserReducer
})

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
 logger,
 sagaMiddleware,
))(createStore);

const store = createStoreWithMiddleware(rootReducer);

sagaMiddleware.run(watcherSaga);

export default store;