import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function FootCard() {
    return (
        <Col>
            <Card body="true" className="card-body border-0 o-hidden mb-0 bg-primary text-light">
                <div className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="h3 text-center mb-md-0">Have a project you would like to discuss?</div>
                    <Button size="lg" variant="light">
                        <Link to="/contact">Hire Torrence!</Link>
                    </Button>
                </div>
            </Card>
        </Col>
    )
}

export default FootCard