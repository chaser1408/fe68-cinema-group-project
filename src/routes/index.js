import Admin from "container/admin/AdminLayout/Admin";
import AddMovie from "container/admin/MovieManager/Add/AddMovie";
import EditMovie from "container/admin/MovieManager/Edit/EditMovie";
import UserManagement from "container/admin/UserManagement/UserManagement";
import Home from "container/clients/Home/Home";
import MovieDetail from "container/clients/MovieDetail/MovieDetail";
import MovieList from "container/clients/MovieList/MovieList";

export const adminRoutes = [
  {
    path: "/Admin/MovieManager/AddMovie",
    component: AddMovie,
    exact: true,
  },
  {
    path: "/Admin/MovieManager/EditMovie/:id",
    component: EditMovie,
    exact: true,
  },

  // {
  //   path: "/Admin/UserManagement",
  //   component: UserManagement,
  //   exact: true,
  // },
  {
    path: "/Admin/MovieManager",
    component: Admin,
    exact: true,
  },
];

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
  //   path: "/Admin/MovieManager",
  //   component: Admin,
  //   exact: false,
  // },
  {
    path: "/Admin/UserManagement",
    component: UserManagement,
    exact: false,
  },
];
