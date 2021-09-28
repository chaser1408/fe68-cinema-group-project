import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import movieReducer from "container/clients/MovieList/module/reducers";
import movieDetailReducer from "container/clients/MovieDetail/module/reducers";
import movieSeatPlanReducer from "container/clients/SeatPlan/module/reducers";
<<<<<<< HEAD
import UserLoginReducer from "container/clients/LoginUser/modules/reducers";
=======
import userLoginReducer from "container/shared/LoginUser/modules/reducers";
>>>>>>> mia
import movieManagerReducer from "container/admin/MovieManager/modules/reducer";
// import addMovieManagerReducer from "container/Admin/MovieManager/Add/modules/reducer"
import editMovieInforReducer from "container/admin/MovieManager/Edit/modules/reducer";
import userMagenementReducer from "container/admin/UserManagement/modules/reducers";
<<<<<<< HEAD
=======
import userEditUserReducer from "container/admin/UserManagement/UpdateUser/modules/reducers";
>>>>>>> mia

const rootReducer = combineReducers({
  movieReducer,
  movieDetailReducer,
  movieSeatPlanReducer,
  userLoginReducer,
  movieManagerReducer,
  // addMovieManagerReducer,
  editMovieInforReducer,
  // user - admin
  userMagenementReducer,
  userEditUserReducer,
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
