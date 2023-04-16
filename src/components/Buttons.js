import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Buttons() {
  return (
    <div className="buttons reveal" id="contact">
      {/* <i className='fa fa-map-marker'><h4>Boston</h4></i> */}
      <ul className="social-media-buttons">
        <li>
          <a role="button" href="mailto: strzelecki.monica7@gmail.com">
            <FontAwesomeIcon icon="fa-solid fa-envelope" size="xl" />
          </a>
        </li>
        <li>
          <a
            className="btn btn-social-icon btn-linkedin"
            href="https://www.linkedin.com/in/monica-strzelecki/"
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size="2xl" />
          </a>
        </li>
        <li>
          <a
            className="btn btn-social-icon btn-github"
            href="https://www.github.com/mjstrz"
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
          </a>
        </li>
      </ul>
    </div>
  );
}
