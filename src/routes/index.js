import Admin from "container/Admin/AdminLayout/Admin";
import UserManagement from "container/Admin/UserManagement/UserManagement";
import Home from "container/clients/Home/Home";
import MovieDetail from "container/clients/MovieDetail/MovieDetail";
import AddMovie from "container/Admin/MovieManager/Add/AddMovie";
import EditMovie from "container/Admin/MovieManager/Edit/EditMovie";
import ShowTime from "container/Admin/MovieManager/ShowTime/ShowTime";

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
 
];

export const adminRoutes = [
  {
    path: "/Admin/MovieManager",
    component: Admin,
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

  // {
  //   path: "/Admin/UserManagement",
  //   component: UserManagement,
  //   exact: true,
  // },
];
