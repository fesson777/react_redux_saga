import {
  take,
  call,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
  select,
  fork,
  all,
  race,
  spawn,
  debounce,
  retry,
} from 'redux-saga/effects'
import {
  LOADER,
  LOCATION_CHANGE,
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
} from '../constats'
import { getLatestNews, getPopularNews } from '../../api'
import { setLatestNews, setPopularNews } from '../actions/actionsCreator'

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNews, 'react')
    yield put(setLatestNews(hits))
  } catch {
    yield put({
      type: SET_LATEST_NEWS_ERROR,
      payload: 'Error fetching latest news',
    })
  }
}
export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews)
    yield put(setPopularNews(hits))
  } catch {
    yield put({
      type: SET_POPULAR_NEWS_ERROR,
      payload: 'Error fetching popular news',
    })
  }
}

export function* watchNewSaga() {
  yield put({ type: LOADER, payload: true })
  const path = yield select(({ news }) => news.location)
  if (path === '/latest-news') {
    yield call(handleLatestNews)
  }
  if (path === '/popular-news') {
    yield call(handlePopularNews)
  }
  yield put({ type: LOADER, payload: false })
}

export default function* rootSaga() {
  yield debounce(1000, LOCATION_CHANGE, () => {
    console.log('debouced 1000')
  })

  yield takeLatest(LOCATION_CHANGE, watchNewSaga)
}
