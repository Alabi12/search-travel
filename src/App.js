import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import the Redux store
import SearchResultsPage from "./pages/SearchResultsPage";
import ListingPage from "./pages/ListingPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/listing/:id" element={<ListingPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
