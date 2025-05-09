import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink, Link } from "react-router-dom";

const NavbarComponents = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  return (
    <div>
      <Navbar
        expand="lg"
        className={changeColor ? "color-active" : ""}
        style={{
          transition: "0.5s",
          position: "fixed",
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-4 fw-bold">
            <span className="logo-box">L</span>
            <span className="logo-text">UFION</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center gap-4">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            {/* Tambahan menu masuk dan daftar */}
            <div className="text-center">
              <NavLink to="/register">
                <Button variant="outline-dark rounded-1 me-2">Daftar</Button>
              </NavLink>
              <NavLink to="/login">
                <Button variant="dark">Masuk</Button>
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
