import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavigationBar = () => (
    <nav class="navbar navbar-dark bg-dark">
        <Navbar expand="lg">
            <Navbar.Brand href="/">Project Maria</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </nav>
)