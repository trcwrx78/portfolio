import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function FootCard() {
    return (
        <Col>
            <Card body="true" className="card-body border-0 o-hidden mb-0 bg-primary text-light">
                <div className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="h3 text-center mb-md-0">Some cool callout to think about</div>
                    <Button size="lg" variant="light">
                        Clicker if needed
                    </Button>
                </div>
            </Card>
        </Col>
    )
}

export default FootCard