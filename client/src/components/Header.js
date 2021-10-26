// import React from "react";
import { FaFileAlt } from "react-icons/fa";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Modal, Tab, } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

// import Auth from '../utils/auth';

const Header = () => {

    // set modal display state

    const [showModal, setShowModal] = useState(false);

    return (
      <div id='header'>
        <div id='header-logo'>
          <FaFileAlt />
        </div>
        <h1>CV Builder <span style={{fontSize: 20, fontStyle: "italic"}}></span></h1>
        {/* <li className="nav-item">
          <Link 
          className="nav-link active6"
          to={`/`}>
            Login
          </Link>
        </li>
        <h2 eventKey='login'handleModalClose={() => setShowModal(false)}> Login </h2> */}
        <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
        <Modal
          size='lg'
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby='signup-modal'>
           {/* tab container to do either signup or login component */}
           <Tab.Container defaultActiveKey='login'>
            <Modal.Header closeButton>
              <Modal.Title id='signup-modal'>
                <Nav variant='pills'>
                  <Nav.Item>
                    <Nav.Link eventKey='login'>Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tab.Content>
                <Tab.Pane eventKey='login'>
                  <LoginForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
                <Tab.Pane eventKey='signup'>
                  <SignUpForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
              </Tab.Content>
            </Modal.Body>
          </Tab.Container>
        </Modal>
      </div>
    );
};    

export default Header;