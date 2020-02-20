import React from 'react'
import EmailForm from './EmailForm'
import Row from "react-bootstrap/Row"

function Contact() {
    return (
        <Row noGutters="true" className="Con-header">
            <div className="fade-in">
                <h1>Contact</h1>
                <EmailForm />
            </div>
        </Row>
    )
}

export default Contact