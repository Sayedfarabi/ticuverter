import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { logger } from "redux-logger";
import rootReducer from "./reducer/rootReducer";
import currenciesCounter from "./middlewares/currenciesCounter";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(currenciesCounter)))

export default store;