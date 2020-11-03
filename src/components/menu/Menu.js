import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

export default function NavMenu() {
  return (
    <Navbar color="light" light expand="sm">
      <NavbarBrand>Blog Của Huy :D</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/">
              Trang chủ
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/about-me">
              About Me
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
