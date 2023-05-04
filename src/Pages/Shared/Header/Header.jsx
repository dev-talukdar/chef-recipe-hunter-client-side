import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link className='text-decoration-none text-white' to={'/'}> Dish Delight</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link><Link className='text-decoration-none text-white' to={'/about-us'}> About Us</Link></Nav.Link>
                            <Nav.Link ><Link className='text-decoration-none text-white' to={'/blog'}> Blog</Link></Nav.Link>
                            <NavDropdown title="Recipe" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Trending</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Latest
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Favourite</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Sale
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link> <Button><Link className='text-decoration-none text-white'  to={'/login'}> Login</Link></Button></Nav.Link>
                            {/* <Nav.Link > <Button><Link className='text-decoration-none text-white'  to={'/registration'}>Registration</Link></Button></Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;