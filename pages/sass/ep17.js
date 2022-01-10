import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  // faUser,
  // faComment,
  // faQuestionCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import {
  // faHome,
  faUser,
  faComment,
  faQuestionCircle,
  // faCog,
} from "@fortawesome/free-regular-svg-icons";

import { useEffect } from "react";
import Link from "next/link";

let items;

export default function Ep17() {
  useEffect(() => {
    items = document.querySelectorAll(".sass-ep17 ul li");
  }, []);

  const handleActiveClass = (e) => {
    items.forEach((item) => {
      item.classList.remove("active");
      e.currentTarget.classList.add("active");
    });
  };

  return (
    <div className="sass-ep17">
      <ul>
        <li className="active" onMouseOver={handleActiveClass}>
          <Link href="#">
            <a>
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
                {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
                {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
                {/* <FontAwesomeIcon icon="fa-regular fa-house-user" /> */}
              </span>
              <span className="text">Home</span>
            </a>
          </Link>
        </li>
        <li onMouseOver={handleActiveClass}>
          <Link href="#">
            <a>
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
                {/* <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" /> */}
              </span>
              <span className="text">Profile</span>
            </a>
          </Link>
        </li>
        <li onMouseOver={handleActiveClass}>
          <Link href="#">
            <a>
              <span className="icon">
                <FontAwesomeIcon icon={faComment} />
              </span>
              <span className="text">Message</span>
            </a>
          </Link>
        </li>
        <li onMouseOver={handleActiveClass}>
          <Link href="#">
            <a>
              <span className="icon">
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
              <span className="text">Help</span>
            </a>
          </Link>
        </li>
        <li onMouseOver={handleActiveClass}>
          <Link href="#">
            <a>
              <span className="icon">
                <FontAwesomeIcon icon={faCog} />
              </span>
              <span className="text">Settings</span>
            </a>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
}
