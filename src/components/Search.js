import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Search = () => {
  const { setSearch, setSearchType } =
    useGlobalContext();

  const inputTextHandler = (e) => {
    e.preventDefault();
    if (e.target.value.length === 0) {
      setSearchType("name");
      setSearch(`a`);
    } else {
      setSearchType("name");
      setSearch(`${e.target.value}?fullText = false`);
    }
  };

  return (
    <section className="filters">
      <div className="filters__search">
        <form onChange={inputTextHandler}>
          <FaSearch />
          <input
            className="input-field"
            type="text"
            placeholder="Search by country name"
          ></input>
        </form>
      </div>
    </section>
  );
};

export default Search;
