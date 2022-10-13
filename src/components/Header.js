import React from "react";
import Search from "./Search";

function Header({onSearch}) {
  // const[search, setSearch] = useState('')
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        // search={search}
        // setSearch={setSearch}
        onSearch={onSearch}

      />
    </header>
  );
}

export default Header;
