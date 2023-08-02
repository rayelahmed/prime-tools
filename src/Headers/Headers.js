import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faGooglePlusG,
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../Images/Logo/topbar-img-1.png";

import "./Headers.css";

const Headers = () => {
  return (
    <div>
      <div className="navbar bg-neutral-900">
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost text-white">
            <FontAwesomeIcon className="icon" icon={faTruck} />{" "}
            <span className="address-bar">Burgunderstr. 8, Singen, 75196</span>
          </a>
          <div>
            <div className="mkd-separator"></div>
          </div>
          <a href="/" className="btn btn-ghost text-white phone-number">
            <FontAwesomeIcon className="icon" icon={faPhone} /> +49 30 008093549
          </a>
          <div>
            <div className="mkd-separator"></div>
          </div>
          <a href="/" className="btn btn-ghost text-white email">
            {" "}
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            prime@tools.com
          </a>
        </div>

        <div className="navbar-end">
          <a href="/">
            <FontAwesomeIcon
              className="brands-icon text-white"
              icon={faTwitter}
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              className="brands-icon text-white"
              icon={faFacebook}
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              className="brands-icon text-white"
              icon={faGooglePlusG}
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              className="brands-icon instagram text-white"
              icon={faInstagram}
            />
          </a>
          <div className="mkd">
            <div className="mkd-separator"></div>
          </div>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Headers;
