import React, { useState, useEffect, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./activity.css";

import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import MidCard from "./MidCard";

function AcitvityHomeCarousel() {
  const [carousel, setCarousel] = useState(0);
  const dataFromServer = [
    {
      Id: 1,
      aId: "1",
      MbId: "7",
      aName: "NAME1",
      aDate: "2020-01-01",
      aLocation: "臺北市中正區羅斯福路三段244巷2號B1",
      aContent:
        "因應「新型冠狀病毒(COVID-19)」防疫措施，自109年3月10日起暫停「憨子弟．瘋亂彈 臺灣北管藝術大展」定時導覽。",
      aKV: "coding.png",
      aCategoryId: "ACG01",
      aBookingTime: "2020/01/01-2020/12/31",
      aLimit: "50",
      aBudget: 100,
      aCostTime: 2,
      aLike:
        "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]",
      aFallowing:
        "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]",
      aBook:
        "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]",
      aImg: "[]",
      created_at: "0000-00-00 00:00:00",
      update_at: "2020-03-21T06:07:00.000Z"
    },
    {
      Id: 2,
      aId: "2",
      MbId: "7",
      aName: "NAME2",
      aDate: "2020-01-01",
      aLocation: "臺北市中正區羅斯福路三段244巷2號B1",
      aContent:
        "因應「新型冠狀病毒(COVID-19)」防疫措施，自109年3月10日起暫停「憨子弟．瘋亂彈 臺灣北管藝術大展」定時導覽。",
      aKV: "IMG_6108.jpg",
      aCategoryId: "ACG01",
      aBookingTime: "2020/01/01-2020/12/31",
      aLimit: "50",
      aBudget: 100,
      aCostTime: 2,
      aLike:
        "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]",
      aFallowing:
        "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]",
      aBook:
        "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]",
      aImg: "[]",
      created_at: "0000-00-00 00:00:00",
      update_at: "2020-03-21T06:07:00.000Z"
    },
    {
      Id: 3,
      aId: "3",
      MbId: "7",
      aName: "NAME3",
      aDate: "2020-01-01",
      aLocation: "臺北市中正區羅斯福路三段244巷2號B1",
      aContent:
        "因應「新型冠狀病毒(COVID-19)」防疫措施，自109年3月10日起暫停「憨子弟．瘋亂彈 臺灣北管藝術大展」定時導覽。",
      aKV: "smile.jpg",
      aCategoryId: "ACG01",
      aBookingTime: "2020/01/01-2020/12/31",
      aLimit: "50",
      aBudget: 100,
      aCostTime: 2,
      aLike:
        "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]",
      aFallowing:
        "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]",
      aBook:
        "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]",
      aImg: "[]",
      created_at: "0000-00-00 00:00:00",
      update_at: "2020-03-21T06:07:00.000Z"
    }
  ];

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
          <LeftCard
            cardData={dataFromServer[2]}
            data={styleObj[carousel % 3]}
          />
          <RightCard
            cardData={dataFromServer[1]}
            data={styleObj[(carousel % 3) + 1 > 2 ? 0 : (carousel % 3) + 1]}
          />
          <MidCard
            cardData={dataFromServer[0]}
            data={styleObj[(carousel % 3) - 1 < 0 ? 2 : (carousel % 3) - 1]}
          />
        </div>
      </div>
    </>
  );
}

export default AcitvityHomeCarousel;
