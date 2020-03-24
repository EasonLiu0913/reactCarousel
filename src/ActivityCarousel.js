import React, { useState, useEffect, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./activity.css";

import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import MidCard from "./MidCard";

function AcitvityHomeCarousel() {
  const [carousel, setCarousel] = useState(0);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    setCarousel(carousel + 1);
  }, 3000);

  const styleObj = [
    {
      divRight: "calc(100vw - 600px - 60px)",
      divMaxHeight: "400px",
      divMaxWidth: "600px",
      divZIndex: "99",
      divTransition: "3s",
      imgGrayScale: "90%",
      imgTransition: "0s",
      titleMarginLeft: "60px",
      titleTransition: "2.3s"
    },

    {
      divRight: "60px",
      divMaxHeight: "400px",
      divMaxWidth: "600px",
      divZIndex: "100",
      divTransition: "3s",
      imgGrayScale: "90%",
      imgTransition: "0s",
      titleMarginLeft: "451px",
      titleTransition: "2.3s"
    },
    {
      divRight: "calc(50vw - 450px)",
      divMaxHeight: "600px",
      divMaxWidth: "900px",
      divZIndex: "101",
      divTransition: "3s",
      imgGrayScale: "0%",
      imgTransition: "0s",
      titleMarginLeft: "60px",
      titleTransition: "2.3s"
    }
  ];

  return (
    <>
      <div>
        <div className="aKV d-flex justify-content-between position-relative">
          <LeftCard data={styleObj[carousel % 3]} />
          <RightCard
            data={styleObj[(carousel % 3) + 1 > 2 ? 0 : (carousel % 3) + 1]}
          />
          <MidCard
            data={styleObj[(carousel % 3) - 1 < 0 ? 2 : (carousel % 3) - 1]}
          />
        </div>
      </div>
    </>
  );
}

export default AcitvityHomeCarousel;
