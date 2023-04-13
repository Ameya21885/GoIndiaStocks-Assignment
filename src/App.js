import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import DisscussionFurm from "./pages/DisscussionFurm";
import User from "./pages/User";
import MarketStories from "./pages/MarketStories";
import Sentiment from "./pages/Sentiment";
import Market from "./pages/Market";
import Sector from "./pages/Sector";
import Watchlist from "./pages/Watchlist";
import Events from "./pages/Events";
import NewsInterview from "./pages/NewsInterview";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<DisscussionFurm />} />
          <Route path="user" element={<User />} />
          <Route path="marketstories" element={<MarketStories />} />
          <Route path="sentiment" element={<Sentiment />} />
          <Route path="market" element={<Market />} />
          <Route path="sector" element={<Sector />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="events" element={<Events />} />
          <Route path="newsinterview" element={<NewsInterview />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
