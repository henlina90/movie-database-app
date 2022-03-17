import Header from "./shared/Header";
import MoviesList from "./home/MoviesList";
import DetailedMoviesList from "./movies/DetailedMoviesList";
import FullMovie from "./movie/FullMovie";
import TheaterList from "./theaters/TheaterList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// <Router> to define the scope of routing within the app
// <Route> components to render components based on the URL path
// Ex: MoviesList component is rendered if the URL path is "/"
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MoviesList />
        </Route>
        <Route exact path="/movies">
          <DetailedMoviesList />
        </Route>
        <Route exact path="/movies/:movieId">
          <FullMovie />
        </Route>
        <Route exact path="/theaters">
          <TheaterList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
