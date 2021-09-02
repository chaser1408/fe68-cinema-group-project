import Home from "container/clients/Home/Home";
import MovieDetail from "container/clients/MovieDetail/MovieDetail";
import MovieList from "container/clients/MovieList/MovieList";
import PageNotFound from "container/shared/PageNotFound/PageNotFound";
import ClientLayout from "layouts/ClientLayout";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import { clientRoutes } from "routes";

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
    <div className="App">
      {/* <Router> */}
      {/* <Switch> */}
      {/* {renderRoutes(clientRoutes, ClientLayout)} */}
      {/* {renderRoutes(adminRoutes, AdminLayout)} */}
      {/* <Route path="*" component={PageNotFound} /> */}
      {/* </Switch> */}
      {/* </Router> */}
      <Home />
    </div>
  );
}

export default App;
