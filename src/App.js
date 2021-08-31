import Home from "container/clients/Home/Home";
import MovieList from "container/clients/MovieList/MovieList";
import PageNotFound from "container/shared/PageNotFound/PageNotFound";
import { Route, Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Switch> */}
      {/* <Route path="/" component={Home} /> */}
      {/* <Route path="/movie-list" component={MovieList} /> */}
      {/* {renderRoutes(adminRoutes, AdminLayout)} */}
      {/* <Route path="*" component={PageNotFound} /> */}
      {/* </Switch> */}
      {/* </Router> */}
      <Home />
    </div>
  );
}

export default App;
