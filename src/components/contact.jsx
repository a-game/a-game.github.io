import React from "react";
import { Link } from "./link";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => (
  <div
    style={{
      width: "15rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Link className="dark-bg" to="https://github.com/a-game">
      <FaGithub />
    </Link>
    <Link className="dark-bg" to="mailto:me@ahmadgame.com">
      <MdEmail />
    </Link>
    <Link className="dark-bg" to="https://www.linkedin.com/in/ahmadgame">
      <FaLinkedinIn />
    </Link>
  </div>
);

export default Contact;
