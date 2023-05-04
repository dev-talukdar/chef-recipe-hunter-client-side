import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {
    const {user, handlelLogout} = useContext(AuthContext);

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


                            {user && <Nav.Link><FaUserAlt style={{ height: "50px" }} className='text-white fs-4'></FaUserAlt> </Nav.Link>}

                            <Nav.Link>
                                {user ?
                                    <Button onClick={handlelLogout} variant='primary'>Logout</Button> :
                                    <Link to={"/login"}>
                                        <Button variant='primary'>Login</Button>
                                    </Link>
                                }
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;