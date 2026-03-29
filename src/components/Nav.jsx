import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='p-4 '>
      <Container>

        {/* 🔥 Logo */}
        <Navbar.Brand href="#home" className="fw-bold">
          🍽️ Madras Cafe
        </Navbar.Brand>

        {/* 📱 Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* 🔗 Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#expertise">Expertise</Nav.Link>
            <Nav.Link href="#about">AboutUs</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default MyNavbar;