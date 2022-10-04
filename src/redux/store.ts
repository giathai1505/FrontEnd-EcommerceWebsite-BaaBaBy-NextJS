import {
  Action,
  AnyAction,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootReducer } from "./slides";

const reducer = (state: ReturnType<typeof rootReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState: ReturnType<typeof rootReducer> = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const createStore = () =>
  configureStore({
    reducer,
  });

let store: ReturnType<typeof createStore>;

export const makeStore = () => {
  store = createStore();
  return store;
};

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type IRootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;

export { store };
export const wrapper = createWrapper(makeStore, { debug: false });
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
