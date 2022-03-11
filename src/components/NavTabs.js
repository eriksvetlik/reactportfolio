import React, { useEffect, useRef } from "react";
import { init } from "ityped";

function NavTabs({ currentPage, handlePageChange }) {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Full Stack Developer"],
    });
  }, []);
  return (
    <header className="container sectionpadding">
      <h2>
        Erik Svetlik <span ref={textRef} className="text-muted"></span>
      </h2>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item link1">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={"link1"}
            >
              Home
            </a>
          </li>
          <li className="nav-item link2">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={"link2"}
            >
              About
            </a>
          </li>
          <li className="nav-item link1">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={"link3"}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item link1">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={"link4"}
            >
              Contact
            </a>
          </li>
          <li className="nav-item link1">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={"link1"}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavTabs;
