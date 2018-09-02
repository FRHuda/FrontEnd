import React, { Component } from 'react';
import {Nav,Navbar,NavItem,MenuItem,NavDropdown,FormGroup,FormControl,} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <Navbar fixedTop={true} collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Project FrontEnd</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Kategori"  eventKey={1} href="#">
                            <MenuItem header eventKey={1.1} href='#'>Men's Collection</MenuItem>
                                <MenuItem>Dresses</MenuItem>
                                <MenuItem>T-Shirts</MenuItem>
                            <MenuItem header eventKey={1.2} href='#'>Women's Collection</MenuItem>
                                <MenuItem>Polo</MenuItem>
                                <MenuItem>Jackets</MenuItem>
                        </NavDropdown>
                        <NavDropdown title="Page"  eventKey={2} href="#">
                                <MenuItem>Product Detail</MenuItem>
                                <MenuItem>Checkout</MenuItem>
                                <MenuItem>Blog</MenuItem>
                                <MenuItem>Contact</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Log In
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            Register
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;