import { Store, createStore, applyMiddleware , compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { logger } from '../middleware/logger';
import { RootState, rootReducer } from '../reducers';
import thunkMiddleware from "redux-thunk";

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

export function configureStore(initialState?: RootState) {
  
  const persistConfig:any = {
    key: 'state',
    storage: storage,
    blacklist: ['languageHeader']
   };

  let middleware = compose(
    applyMiddleware(
      logger,
      thunkMiddleware
    ),
  );

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const pReducer = persistReducer(persistConfig, rootReducer);


  const store = createStore(
    pReducer as any, 
    initialState as any, 
    middleware as any,
   ) as Store< RootState>;

  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextReducer = require('app/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  let persistor = persistStore(store)

  return {store,persistor};
}


