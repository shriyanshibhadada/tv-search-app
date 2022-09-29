import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import ShowBox from "./ShowBox";

function Content() {
  const showList = useSelector((state) => state);
  //   console.log(showList);
  return (
    <div>
      <main id="main">
        <section className="section site-portfolio">
          <div className="container">
            <div
              id="portfolio-grid"
              className="row no-gutter"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {showList.map((item, index) => {
                return (
                  <ShowBox
                    id={item.show.id}
                    key={index}
                    name={item.show.name}
                    language={item.show.language}
                    image={
                      item.show.image
                        ? item.show.image.original
                        : "https://sd.keepcalms.com/i/no-just-no-2.png"
                    }
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Content;
