import { createStore, applyMiddleware } from "redux";

interface State {
  message: string;
}

const initialState: State = {
  message: "",
};

const reducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

const stringMiddleware = () => (next: any) => (action: any) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(stringMiddleware));

store.dispatch("SET_MESSAGE");
console.log(store.getState()); 

store.dispatch({ type: "SET_MESSAGE", payload: "Hello world!" });
console.log(store.getState()); 

export default store;
