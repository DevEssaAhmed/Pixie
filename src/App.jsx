import { useState } from "react";
import searchImages from "./api";

import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSumbit = (term) => {
    searchImages(term);
  };
  return (
    <div className='app'>
      <SearchBar onSubmit={handleSumbit} />
    </div>
  );
}

export default App;
