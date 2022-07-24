import React from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../../assets/logo.webp'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
const Header = () => {
    const {quantity}=useSelector(state=>state.cartReducer)

    return (
        <div>
            <>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                        <div>
                            <ul className='list-unstyled d-flex m-0 gap-5 fw-bold'>
                                <li className='cursor'>
                                   <Link className='link' to='/'>Home</Link>
                                </li>
                                <li className='cursor'>
                                    <HashLink className='link' smooth to='/#product'>
                                        Product
                                    </HashLink>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <button type="button" class="btn btn-dark text-white position-relative me-2">
                                <AiOutlineShoppingCart />
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {
                                        quantity
                                    }
                                </span>
                            </button>
                        </div>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;