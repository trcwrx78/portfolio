import React from 'react'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function FootInfo() {
    return (
        <Col lg={6}>
            <h5>Information</h5>
            <ul className="list-unstyled text-left">
                <li className="mb-3 d-flex">
                    <FontAwesomeIcon icon="address-card" />
                    <div className="ml-3">
                        <span>37334 Tail Feather Dr
                        <br/>North Ridgeville, OH</span>
                    </div>
                </li>
                <li className="mb-3 d-flex">
                    <FontAwesomeIcon icon="mobile-alt" />
                    <div className="ml-3">
                        <span>440.781.5639</span>
                        <span className="d-block text-muted text-small">Mon - Fri 9am - 5pm</span>
                    </div>
                </li>
                <li className="mb-3 d-flex">
                    <FontAwesomeIcon icon="paper-plane" />
                    <div className="ml-3">
                        <a href="#">me@torrencecole.com</a>
                    </div>
                </li>
            </ul>
        </Col>
    )
}

export default FootInfo