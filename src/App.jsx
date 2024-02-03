import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/movies";
import DetailMoviePage from "./pages/detailMovie";
import ErrorPage from "./pages/404";
import { WatchListProvider } from "./contexts/WatchListContext";
import WatchListPage from "./pages/watchList";

const App = () => {
  return (
    <WatchListProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<DetailMoviePage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </WatchListProvider>
  );
};

export default App;
