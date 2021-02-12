import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DriveNavbar = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        FireDrive
      </Navbar.Brand>

      <Nav.Link as={Link} to="/user">
        Profile
      </Nav.Link>
    </Navbar>
  );
};

export default DriveNavbar;
