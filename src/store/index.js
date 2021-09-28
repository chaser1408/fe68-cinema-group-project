import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import movieReducer from "container/clients/MovieList/module/reducers";
import movieDetailReducer from "container/clients/MovieDetail/module/reducers";
// import movieSeatPlanReducer from "container/clients/SeatPlan/module/reducers";
import userLoginReducer from "container/shared/LoginUser/modules/reducers";
import movieManagerReducer from "container/admin/MovieManager/modules/reducer";
import editMovieInforReducer from "container/admin/MovieManager/Edit/modules/reducer";
import userMagenementReducer from "container/admin/UserManagement/modules/reducers";
import userEditUserReducer from "container/admin/UserManagement/UpdateUser/modules/reducers";
import clientMovieReducer from "container/clients/MovieInfor/modules/reducer";
import movieSeatPlanReducer1 from "container/clients/CheckOut/module/reducers";

// import QuanLyPhimReducer from "components/HomeMovie/module/reducer"
const rootReducer = combineReducers({
  movieReducer,
  movieDetailReducer,
  //  movieSeatPlanReducer,
  movieSeatPlanReducer1,

  userLoginReducer,
  movieManagerReducer,
  //movieInforReducer
  clientMovieReducer,
  // QuanLyPhimReducer,
  // addMovieManagerReducer,
  editMovieInforReducer,
  // user - admin
  userMagenementReducer,
  userEditUserReducer,
});

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // composeWithDevTools(applyMiddleware(thunk))
  applyMiddleware(thunk)
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default store;

// lấy danh sách người dùng
//
