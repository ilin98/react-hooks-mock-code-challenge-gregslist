import React from "react";
import Search from "./Search";

function Header({onHandleSearch, search}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onHandleSearch={onHandleSearch} search={search}/>
    </header>
  );
}

export default Header;
