import React from "react";
import moment from "moment";
import { Container, Logo } from "./Header.styles";
import logo from "../images/logo.svg";

function Header() {
  const today = moment().format("dddd, MMMM D, YYYY");

  return (
    <Container>
      <div>
        <span>{today}</span>
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <a target="_blank" href="https://www.nytimes.com/section/todayspaper">
          Today’s Paper
        </a>
      </div>
    </Container>
  );
}

export default Header;
