import React from "react";
import { Card } from "react-bootstrap";

function LeftCard(props) {
  return (
    <>
      <div
        className="position-absolute"
        style={{
          right: props.data.divRight,
          maxHeight: props.data.divMaxHeight,
          maxWidth: props.data.divMaxWidth,
          zIndex: props.data.divZIndex,
          transition: props.data.divTransition
        }}
      >
        <img
          style={{
            filter: "grayscale(" + props.data.imgGrayScale + ")",
            transition: props.data.imgTransition
          }}
          src="/images/activity/IMG_6108.jpg"
          alt="hotactivity_sideKV"
        />

        <div
          style={{
            marginLeft: props.data.titleMarginLeft,
            transition: props.data.titleTransition
          }}
          className="aSideCarouselInfo position-absolute"
        >
          <Card.Title className="m-0">Card Title</Card.Title>
        </div>
      </div>
    </>
  );
}

export default LeftCard;
