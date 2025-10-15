import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { HeaderContent } from "./HeaderContent";

export const HeaderNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container >
          <Navbar.Brand href="#">
            <h3>Frontend Practice</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav>
              <div className="mt-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Articles</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Contact
                  </Breadcrumb.Item>
                  
                </Breadcrumb>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HeaderContent/>
    </div>
    
  );
};