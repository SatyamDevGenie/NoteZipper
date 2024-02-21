import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({ size = 75 }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spinner
        style={{
          width: size,
          height: size,
        }}
        animation="border"
        variant="secondary"
      />
    </div>
  );
}

export default Loading;
