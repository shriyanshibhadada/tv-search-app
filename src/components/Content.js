import React, { useState } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import ShowBox from "./ShowBox";
import { useDispatch } from "react-redux";
import updateShow from "../redux/action/index";
import randomWords from "random-words";

import InfiniteScroll from "react-infinite-scroll-component";

function Content() {
  const dispatch = useDispatch();
  const showList = useSelector((state) => state);
  //   console.log(showList);
  const [query, setQuery] = useState("girl");
  const api = `https://api.tvmaze.com/search/shows?q=${query}`;

  async function fetchShow() {
    setQuery(randomWords());
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data);
    const newData = showList.concat(data);
    dispatch(updateShow(newData));
  }
  const fetchMoreData = () => {
    fetchShow();
  };
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
              <InfiniteScroll
                dataLength={showList.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                className="row no-gutter"
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
              </InfiniteScroll>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Content;
