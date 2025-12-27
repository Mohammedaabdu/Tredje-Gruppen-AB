import Container from "./Container";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import Logo from "./Logo";
import LinkButton from "./LinkButton";
import { useState } from "react";

import Icon from "./Icon";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <Container>
        <div className="flex justify-between">
          <div className="text-2xl my-4">
            <Logo />
          </div>
          <nav className="hidden my-auto lg:block space-x-4 font-medium ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-green-600" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "text-green-600" : "")}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-green-600" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-green-600" : "")}
            >
              Contact
            </NavLink>

            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center
             px-4 py-2
             bg-green-600 text-white
             rounded-full
             hover:opacity-90
             hover:text-white!
             transition-colors"
            >
              Get a Quote
            </NavLink>
          </nav>
          <div className="lg:hidden my-auto">
            {menuOpen && (
              <div
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/10 backdrop-blur-sx z-40"
              ></div>
            )}

            <Icon onClick={() => setMenuOpen(true)} iconName={faBars}></Icon>
            <nav
              className={`fixed right-0 top-0 z-50 p-6 bg-white h-screen w-[80vw] max-w-sm box-border transform transition-transform duration-300 ease-in-out ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="space-y-6 flex flex-col w-full">
                <Icon
                  onClick={() => setMenuOpen(false)}
                  className="self-end"
                  iconName={faX}
                ></Icon>
                <NavLink onClick={() => setMenuOpen(false)} to="/">
                  Home
                </NavLink>
                <NavLink onClick={() => setMenuOpen(false)} to="/services">
                  Services
                </NavLink>
                <NavLink onClick={() => setMenuOpen(false)} to="/about">
                  About
                </NavLink>
                <NavLink onClick={() => setMenuOpen(false)} to="/contact">
                  Contact
                </NavLink>
                <LinkButton
                  onClick={() => setMenuOpen(false)}
                  className="text-center w-full block"
                  to="/contact"
                >
                  Get a Quote
                </LinkButton>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
