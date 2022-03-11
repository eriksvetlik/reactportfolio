import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setErrorMessage("Name is required");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }

    if (message === "") {
      setErrorMessage("Message is required");
      return;
    }

    alert(`Thanks for the message ${name}!`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container padding">
      <h1>Contact</h1>
      <div className="row">
        <div className="row-child">
          <p>
            <i className="fas fa-at"></i>
            <a href="mailto: svetlik.erik@gmail.com" class="href link1">
              &nbsp;svetlik.erik@gmail.com
            </a>
          </p>
          <p>
            <i className="fab fa-github"></i>
            <a href="https://github.com/eriksvetlik" class="href link2">
              &nbsp;https://github.com/eriksvetlik
            </a>
          </p>
          <p>
            <i className="fab fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/erik-svetlik"
              class="href link3"
            >
              &nbsp;https://linkedin.com/in/erik-svetlik
            </a>
          </p>
        </div>
        <div className="row-child right">
          <form className="form">
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />

            <br></br>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <br></br>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
            />
            <br></br>
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
