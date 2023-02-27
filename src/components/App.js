import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState(false)

  function handleClick(e) {
    setFavorite(!favorite)
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="app">
      <Header onHandleSearch={handleSearch} search={search}/>
      <ListingsContainer onHandleClick={handleClick} favorite={favorite} search={search} />
    </div>
  );
}

export default App;
