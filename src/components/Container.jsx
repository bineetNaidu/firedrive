import React from 'react';
import { Container as BootStrapContainer } from 'react-bootstrap';

const Container = ({ children }) => {
  return (
    <BootStrapContainer
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        {children}
      </div>
    </BootStrapContainer>
  );
};

export default Container;
