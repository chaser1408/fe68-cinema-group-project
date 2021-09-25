import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { clientRoutes, adminRoutes } from "routes";
import ClientLayout from "layouts/ClientLayout";
import AdminLayout from "layouts/AdminLayout";
import PageNotFound from "container/shared/PageNotFound/PageNotFound";
import LoginUser from "container/shared/LoginUser/LoginUser";

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
          {renderRoutes(adminRoutes, AdminLayout)}

          <Route path="/login" component={LoginUser} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
