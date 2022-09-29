import React, { useEffect, useState } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "../components/Content";
import Search from "../components/Search";
import { useDispatch } from "react-redux";
import updateShow from "../redux/action/index";

function App() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("girls");
  const [search, setSearch] = useState("");
  const api = `https://api.tvmaze.com/search/shows?q=${query}`;
  async function fetchShow() {
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data);
    dispatch(updateShow(data));
  }

  useEffect(() => {
    fetchShow();
  }, [query]);

  function handleChange(event) {
    setSearch(event.target.value);
    setQuery(event.target.value);
  }

  function submitQuery(event) {
    setQuery(search);
    event.preventDefault();
    setSearch("");
  }

  return (
    <div>
      <Search
        handleChange={handleChange}
        search={search}
        submitQuery={submitQuery}
      />
      <Content />
    </div>
  );
}

export default App;
