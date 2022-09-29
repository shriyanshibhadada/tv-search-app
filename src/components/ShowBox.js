import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function ShowBox(props) {
  let navigate = useNavigate();
  function handleClick(event) {
    navigate(`/${props.id}`);
  }

  return (
    <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
      <div className="item-wrap fancybox" onClick={handleClick}>
        <div className="work-info">
          <h3>{props.name}</h3>
          <span>{props.language}</span>
        </div>
        <img className="img-fluid" src={props.image} alt="poster" />
      </div>
    </div>
  );
}

export default ShowBox;
