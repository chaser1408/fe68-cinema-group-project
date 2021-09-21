import Home from "container/clients/Home/Home";
import LoginUser from "container/clients/LoginUser/LoginUser";
import MovieDetail from "container/clients/MovieDetail/MovieDetail";
import SeatPlan from "container/clients/SeatPlan/SeatPlan";
import Admin from "container/Admin/AdminLayout/Admin";
import EditMovie from "container/Admin/MovieManager/Edit/EditMovie";
// import MovieList from "container/clients/MovieList/MovieList";
// import PageNotFound from "container/shared/PageNotFound/PageNotFound";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddMovie from "container/Admin/MovieManager/Add/AddMovie";
import UserManagement from "container/Admin/UserManagement/UserManagement";
import { clientRoutes } from "routes";
import ClientLayout from "layouts/ClientLayout";
import PageNotFound from "container/shared/PageNotFound/PageNotFound";

function App() {
  const renderRoutes = (routes, Layout) => {
    return routes.map((route, index) => {
      const { path, component, exact } = route;
      return (
        <Layout key={index} path={path} component={component} exact={exact} />
      );
    });
  };
  return (
    // <>
    //   <Router>
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/movie-detail/:movieId" component={MovieDetail} />
    //       <Route exact path="/seat-plan/:showTimeId" component={SeatPlan} />
    //       <Route path="/register" component={LoginUser} />
    //       <Route exact path="/Admin" component={Admin} />
    //       <Route
    //         exact
    //         path="/Admin/MovieManager/EditMovie/:id"
    //         component={EditMovie}
    //       />
    //       <Route path="/Admin/MovieManager/AddMovie" component={AddMovie} />
    //       <Route path="/Admin/UserManagement/" component={UserManagement} />
    //     </Switch>
    //   </Router>
    // </>
    <div className="App">
      <Router>
        <Switch>
          {renderRoutes(clientRoutes, ClientLayout)}
          <Route path="/login" component={LoginUser} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
