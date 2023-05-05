import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../Provider/AuthProvider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


const NavigationBar = () => {
    const { user, handlelLogout } = useContext(AuthContext);
    const navigate = useNavigate()

    const customLogout = () => {
        handlelLogout()
        navigate('/login')
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
    );

    return (
        <div>

            <div>
                <Container>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand><Link className='text-decoration-none text-white' to={'/'}> Dish Delight</Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">

                                <Nav className="mx-auto">

                                    <Nav.Link> <NavLink
                                        to="/about-us"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-warning text-decoration-none" : "text-decoration-none text-white"
                                        }
                                    >
                                        About Us
                                    </NavLink> <NavLink
                                        to="/blog"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-warning text-decoration-none" : " text-decoration-none text-white"
                                        }
                                    >
                                            Blog
                                        </NavLink> </Nav.Link>

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


                                    {/* {user && <Nav.Link><span title='Talukdar'><FaUserAlt style={{ height: "50px" }} className='text-white fs-4'></FaUserAlt></span> </Nav.Link>} */}
                                    {user && <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <Button variant="success">Hover me to see</Button>
                                    </OverlayTrigger>}


                                    <Nav.Link>
                                        {user ?
                                            <Button onClick={customLogout} variant='primary'>Logout</Button> :
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

            </div>

        </div>

    );
};

export default NavigationBar;