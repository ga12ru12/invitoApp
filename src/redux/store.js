import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
import rootReducer from './index.js'
import Config from '../config/DebugSettings'
import createSagaMiddleware from 'redux-saga'
import R from 'ramda'
import RehydrationServices from '../services/RehydrationServices'
import ReduxPersist from '../config/ReduxPersist'


export default (onComplete) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  // const sagaMiddleware = createSagaMiddleware()
  // middleware.push(sagaMiddleware)

  /* ------------- Logger Middleware ------------- */

  const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']
  if (__DEV__) {
    // the logger master switch
    const USE_LOGGING = Config.reduxLogging
    // silence these saga-based messages
    // create the logger
    const logger = createLogger({
      predicate: (getState, { type }) => USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
    })
    middleware.push(logger)
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate())
  }

  const store = createStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store, onComplete)
  }

  // kick off root saga

  return store
}
