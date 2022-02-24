import { createDispatchHook, createSelectorHook } from "react-redux";
import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Action } from "./action";

let r = () => {
  return null;
};

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  r,
});

type RootState = ReturnType<typeof rootReducer>;

export const useDispatch = createDispatchHook<RootState, Action>();
export const useSelector = createSelectorHook<RootState, Action>();
export const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
);
