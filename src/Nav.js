import { React, useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Pkflix Logo"
      />
      <img
        className="nav-avatar"
        src={process.env.PUBLIC_URL + "/Netflix-avatar.png"}
        alt="Pkflix Logo"
      />
    </div>
  );
}

export default Nav;
