import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigate() {
  return (
    <>
      <Navbar expand="lg" className="bg-danger">
        <Container className="d-flex">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/" className="text-white text-decoration-none">
                <div className="p-2">Home 🏠</div>
              </Link>
              <Link to="/Contact" className="text-white text-decoration-none">
                <div className="p-2">Contacto 📒</div>
              </Link>
            </Nav>
            <Nav className="happy">
              <div className="text-white ">Happy Cake 🧁</div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigate;
