import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Description() {
  let navigate = useNavigate();
  const showID = window.location.pathname.split("/")[1];
  const showList = useSelector((state) => state);

  const show = showList.find((o) => o.show.id == showID);
  // console.log(show);
  const goBack = () => {
    navigate("/");
  };
  return (
    <div>
      <section className="section">
        <div className="site-section pb-0">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-md-8" data-aos="fade-up">
                <img
                  src={
                    show.show.image
                      ? show.show.image.original
                      : "https://sd.keepcalms.com/i/no-just-no-2.png"
                  }
                  style={{ width: "100%" }}
                  alt="/"
                  className="img-fluid"
                />
              </div>
              <div
                className="col-md-3 ml-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="sticky-content">
                  <h3 className="h1">{show.show.name}</h3>
                  <p className="mb-4">
                    <span
                      className="text-muted"
                      dangerouslySetInnerHTML={{ __html: show.show.summary }}
                    />
                  </p>
                  {/* <h3 className="h3 mb-3">Genres</h3> */}
                  <p>
                    <b>Genres: </b>
                  </p>
                  <ul className="list-unstyled list-line mb-5">
                    {show.show.genres.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                  <p>
                    <b>Rating: </b>
                    {show.show.rating.average}
                  </p>
                  {show.show.network ? (
                    <p>
                      <b>Channel: </b>
                      {show.show.network.name}
                    </p>
                  ) : (
                    <div></div>
                  )}
                  <p>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={goBack}
                    >
                      Go back
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Description;
