import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

function FootNav() {
    return (
        <Col lg={3} xl={2}>
            <h5>Navigate</h5>
            <Nav className="flex-column text-left">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
        </Col>
    )
}

export default FootNav