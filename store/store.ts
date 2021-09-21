import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Compose a store creator with some middlewares
const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(...middleware)
)(createStore);

// Create a store
const store = createStoreWithMiddleware(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
