import { createStore } from "redux";
import rootReducer from "../reducers";

export default (configureStore = () => createStore(rootReducer));
