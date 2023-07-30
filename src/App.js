import React, { useState } from "react";
import NavBar from "./Comp/NavBar";
import News from "./Comp/News";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./Comp/Footer";

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Router>
        <NavBar onSearch={handleSearch} />

        <Routes>
          <Route exact path="/" element={<News  key = "" pageSize={12} category="general" />} />
          <Route exact path="/business"  element={<News key = "business"  pageSize={12} category="business" />} />
          <Route exact path="/entertainment"  element={<News key = "entertainment" pageSize={12} category="entertainment" />} />
          <Route exact path="/health"  element={<News key = "health" pageSize={12} category="health" />} />
          <Route exact path="/science" element={<News key = "science"  pageSize={12} category="science" />} />
          <Route exact path="/sports"  element={<News key = "sports" pageSize={12} category="sports" />} />
          <Route exact path="/technology"  element={<News  key = "technology" pageSize={12} category="technology" />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}
