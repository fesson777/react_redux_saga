import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { news as reducerNews } from './reducer/news'
import { errors as reducerErrors } from './reducer/error'
import rootSaga from './sagas'
import { loader as loaderReducer } from './reducer/loader'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    news: reducerNews,
    errors: reducerErrors,
    loader: loaderReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)
