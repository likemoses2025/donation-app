import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

// redux 데이터 유지 , asyncstorage(비암호화,전역 적용 저장 시스템)
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

// 로거셋팅
import {logger} from 'redux-logger';

import User from './reducers/User';

const rootReducer = combineReducers({
  user: User,
});

// AsyncStorage Setting
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({serializableCheck: false}).concat(logger);
  },
});

export default store;
export const persistor = persistStore(store);
