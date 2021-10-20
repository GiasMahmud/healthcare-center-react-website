import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hook/useAuth';

const Header = () => {

    const { logOut, user } = useAuth()
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className='logo ps-5 pe-5' href="#">Patient Care Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="btn-hover" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="btn-hover" as={HashLink} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link className="btn-hover" as={HashLink} to="/services">Services</Nav.Link>
                        <Nav.Link className="btn-hover" as={HashLink} to="/signup">Register {user?.email && <span>as {user.displayName}</span>}</Nav.Link>
                        <Nav.Link className="btn-hover" as={HashLink} to="/aboutus">About Us</Nav.Link>
                        {user?.email && <button className='btn btn-custom' onClick={logOut}>log out</button>}

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header