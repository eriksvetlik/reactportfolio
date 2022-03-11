import React from "react";

export default function About() {
  return (
    <div className="container padding">
      <h1>About</h1>
      <div className="row">
        <div className="row-child">
          <img
            id="headshot"
            alt="headshot"
            class="img-gray"
            src="./images/headshot.jpg"
          ></img>
        </div>
        <div className="row-child right">
          <p>
            Self-driven full-stack web developer with two years of experience
            designing, developing, testing and debugging applications within a
            web-based CMMS using HTML, CSS, Bootstrap, JavaScript, jQuery, ASP,
            and SQL. Currently earning a certificate in full-stack development
            from the Web Development Boot Camp at UT Austin, with newly
            developed skills in React.js, Node.js, MongoDB and MySQL. Passionate
            about using customer support background to build web applications
            with high end-user satisfaction, and continuously developing
            programming knowledge and skills on a personal level.
          </p>
        </div>
      </div>
    </div>
  );
}
