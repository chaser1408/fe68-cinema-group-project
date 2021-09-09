import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import movieReducer from "container/clients/MovieList/module/reducers";
import movieDetailReducer from "container/clients/MovieDetail/module/reducers";
import movieSeatPlanReducer from "container/clients/SeatPlan/module/reducers";
import UserLoginReducer from "container/clients/LoginUser/modules/reducers";
import movieManagerReducer from "container/Admin/MovieManager/modules/reducer";


const rootReducer = combineReducers({
  movieReducer,
  movieDetailReducer,
  movieSeatPlanReducer,
  UserLoginReducer,
  movieManagerReducer,

});

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools(applyMiddleware(thunk))
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default store;

// lấy danh sách người dùng
//
