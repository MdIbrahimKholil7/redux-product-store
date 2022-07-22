import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../assets/logo.webp'
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Header = () => {
    return (
        <div>
            <>
                <Navbar className='text-primary nav'>
                    <Container>
                        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                        <div className='text-dark '>
                            <Nav className="me-auto fw-bold gx-5 d-flex justify-content-center align-items-center">
                                <p className='mt-0 mb-0 ms-3'>Home</p>
                                <p className='mt-0 mb-0 ms-3'>Home</p>
                                <p className='mt-0 mb-0 ms-3'>Home</p>
                            </Nav>
                        </div>
                        <div>
                            <Nav className="me-auto">
                                <div>
                                    <span>
                                        <AiOutlineShoppingCart/>
                                    </span>
                                </div>
                            </Nav>
                        </div>

                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;