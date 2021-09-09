import Home from "container/clients/Home/Home";
import LoginUser from "container/clients/LoginUser/LoginUser";
import MovieDetail from "container/clients/MovieDetail/MovieDetail";
import SeatPlan from "container/clients/SeatPlan/SeatPlan";
import Admin from "container/Admin/AdminLayout/Admin"


// import MovieList from "container/clients/MovieList/MovieList";
// import PageNotFound from "container/shared/PageNotFound/PageNotFound";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  // const renderRoutes = (routes, Layout) => {
  //   return routes.map((route, index) => {
  //     const { path, component, exact } = route;
  //     return (
  //       <Layout key={index} path={path} component={component} exact={exact} />
  //     );
  //   });
  // };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie-detail/:movieId" component={MovieDetail} />
          <Route exact path="/seat-plan/:showTimeId" component={SeatPlan} />
          <Route path="/register" component={LoginUser} />
          <Route path="/Admin" component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
