import UserManagement from "container/admin/UserManagement/UserManagement";
import Home from "container/clients/Home/Home";
import MovieDetail from "container/clients/MovieDetail/MovieDetail";
import AddMovie from "container/admin/MovieManager/Add/AddMovie";
import EditMovie from "container/admin/MovieManager/Edit/EditMovie";
import ShowTime from "container/admin/MovieManager/ShowTime/ShowTime";
import MovieManager from "container/admin/MovieManager/MovieManager";
import LoginUser from "container/shared/LoginUser/LoginUser";
import SeatPlan from "container/clients/SeatPlan/SeatPlan";
import CheckOut from "container/clients/CheckOut/CheckOut";

export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/movie-detail/:movieId",
    component: MovieDetail,
    exact: false,
  },
  // {
  //   path: "/seat-plan/:showTimeId",
  //   component: SeatPlan,
  //   exact: false,
  // },
  {
    path: "/CheckOut/:id",
    component: CheckOut,
    exact: false,
  },
  {
    path: "/login",
    component: LoginUser,
    exact: false,
  },
];

export const adminRoutes = [
  {
    path: "/Admin/MovieManager",
    component: MovieManager,
    exact: true,
  },
  {
    path: "/Admin/MovieManager/AddMovie",
    component: AddMovie,
    exact: false,
  },
  {
    path: "/Admin/MovieManager/EditMovie/:id",
    component: EditMovie,
    exact: false,
  },
  {
    path: "/Admin/MovieManager/ShowTime/:id",
    component: ShowTime,
    exact: false,
  },
  // User
  {
    path: "/Admin/UserManagement",
    component: UserManagement,
    exact: true,
  },
];
