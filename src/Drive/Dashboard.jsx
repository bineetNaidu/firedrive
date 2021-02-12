import React from 'react';
import { Container } from 'react-bootstrap';
import AddFolderBtn from './AddFolderBtn';
import DriveNavbar from './Navbar';

const Dashboard = () => {
  return (
    <>
      <DriveNavbar />
      <Container fluid>
        <AddFolderBtn />
      </Container>
    </>
  );
};

export default Dashboard;
