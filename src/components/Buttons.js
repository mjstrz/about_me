import React from 'react';


export default function Buttons() {
    return (
        <div className="buttons">
{/* <i className='fa fa-map-marker'><h4>Boston</h4></i> */}
<ul className="social-media-buttons">
  <li>
    <a role="button" href="mailto: strzelecki.monica7@gmail.com">
    {/* <i className="fa-sharp fa-solid fa-envelope" size="lg" /> */}
      <i className="fa fa-envelope" size="lg" aria-hidden="true"></i>
      <i class="fa-sharp fa-light fa-at"></i>
    </a>
  </li>
  <li>
    <a
      className="btn btn-social-icon btn-linkedin"
      href="https://www.linkedin.com/in/monica-strzelecki/"
      target="_blank"
    >
      {" "}
      <i class="fa fa-linkedin-square" aria-hidden="true"></i>hello
    </a>{" "}
  </li>
  <li>
    <a
      className="btn btn-social-icon btn-github"
      href="https://www.github.com/mjstrz"
      target="_blank"
    >
      <i className="fa fa-github"></i>
    </a>{" "}
  </li>
</ul>
</div>
    )
}

