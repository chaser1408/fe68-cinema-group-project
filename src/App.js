import Home from "container/clients/Home/Home";
import MovieDetail from "container/clients/MovieDetail/MovieDetail";
import MovieList from "container/clients/MovieList/MovieList";
import PageNotFound from "container/shared/PageNotFound/PageNotFound";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router> */}
      {/* <Switch> */}
      {/* <Route path="/" component={Home} /> */}
      {/* <Route path="/movie-list" component={MovieList} /> */}
      {/* {renderRoutes(adminRoutes, AdminLayout)} */}
      {/* <Route path="*" component={PageNotFound} /> */}
      {/* </Switch> */}
      {/* </Router> */}
      {/* <Home /> */}

      {/* <Router>
        <Switch>
          <Route exact path="/" component={MovieDetail} />
          <Route exact path="/movie_detail" component={Home} />
        </Switch>
      </Router> */}

      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/detail" component={MovieDetail}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
