import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Search(props) {
  return (
    <div className="container">
      <div className="col-md-6 col-sm-6 col-lg-6 search">
        <form className="input-group mb-3">
          <input
            placeholder="search for your favorite tv show"
            type="text"
            onChange={props.handleChange}
            value={props.search}
            className="form-control"
          />
          <button
            className="btn btn-outline-secondary"
            onClick={props.submitQuery}
          >
            search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
