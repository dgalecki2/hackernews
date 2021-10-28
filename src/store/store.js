import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import appReducer from "./reducers/reducers.js";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
