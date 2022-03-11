import React from "react";
import { BoxesLoader } from "react-awesome-loaders";

export default function Home() {
  return (
    <div className="container">
      <h1 className="padding">
        Well, hello. Learn more about me using the links in the navbar!
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <BoxesLoader
          boxColor={"#2d2d2d"}
          shadowColor={"#6c757d"}
          desktopSize={"192px"}
          mobileSize={"120px"}
        />
      </div>
    </div>
  );
}
