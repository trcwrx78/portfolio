import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FootIcons() {
    return (
        <Col lg="auto">
            <Nav>
                <Nav.Link href="https://twitter.com/TRC_3" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/torrencecole/" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                </Nav.Link>
                <Nav.Link href="https://github.com/trcwrx78" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                </Nav.Link>
                <Nav.Link href="https://www.facebook.com/torrence.cole" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/trcwrx78/" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                </Nav.Link>
            </Nav>
        </Col>
    )
}

export default FootIcons