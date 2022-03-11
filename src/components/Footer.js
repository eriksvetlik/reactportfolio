import React from "react";

export default function Footer() {
  return (
    <div
      className="container footerRow"
      style={{
        justifyContent: "center",
        paddingTop: "40px",
        borderTop: "1px solid #dee2e6",
      }}
    >
      <p>
        <a href="https://github.com/eriksvetlik" class="href link1">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </p>
      <p className="marginLeft">
        <a href="https://www.linkedin.com/in/erik-svetlik" class="href link2">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </p>
      <p className="marginLeft">
        <a
          href="https://stackoverflow.com/users/17494308/e-svetlik"
          class="href link3"
        >
          <i className="fab fa-stack-overflow fa-2x"></i>
        </a>
      </p>
    </div>
  );
}
