import React from "react";

export default function Resume() {
  return (
    <div className="container responsive-iframe-container padding">
      <iframe
        className="responsive-iframe"
        title="resume"
        src="./Resume.pdf"
        // width="1280"
        // height="960"
      ></iframe>
    </div>
  );
}
