import Admin from "container/Admin/AdminLayout/Admin";
import UserManagement from "container/Admin/UserManagement/UserManagement";
import Home from "container/clients/Home/Home";
import MovieDetail from "container/clients/MovieDetail/MovieDetail";
import MovieList from "container/clients/MovieList/MovieList";

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
  {
    path: "/Admin/MovieManager",
    component: Admin,
    exact: false,
  },
  {
    path: "/Admin/UserManagement",
    component: UserManagement,
    exact: false,
  },
];
