import {
  LogoFacebook,
  LogoTwitter,
  LogoLinkedin,
  LogoInstagram,
} from "react-ionicons";
import Link from "next/link";

export default function Ep16() {
  const iColor = "white";
  const iWH = "30px";

  return (
    <div className="sass-ep16">
      <footer>
        <div className="waves">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <ul className="social_icon">
          <li>
            <Link href="/">
              <a>
                <LogoFacebook
                  color={iColor}
                  height={iWH}
                  width={iWH}
                  onClick={() => console.log("Hi!")}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <LogoTwitter
                  color={iColor}
                  height={iWH}
                  width={iWH}
                  onClick={() => console.log("Hi!")}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <LogoLinkedin
                  color={iColor}
                  height={iWH}
                  width={iWH}
                  onClick={() => console.log("Hi!")}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <LogoInstagram
                  color={iColor}
                  height={iWH}
                  width={iWH}
                  onClick={() => console.log("Hi!")}
                />
              </a>
            </Link>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Team</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <p>@2021 Online Tutorials | All Rights Reserved</p>
      </footer>
    </div>
  );
}
