import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FootNav from './FootNav'
import FootInfo from './FootInfo'
import FootTweets from './FootTweets'
import FootIcons from './FootIcons'
import FootCard from './FootCard'

function Footer() {
    return (
        <footer className="pb-4 text-light">
            <Container>
                <Row noGutters="true" className="mb-5">

                    <FootCard />

                </Row>
                <Row noGutters="true" className="mb-5">

                    <FootNav />
                    <FootInfo />
                    <FootTweets />

                </Row>
                <Row noGutters="true" className="justify-content-center mb-2">

                    <FootIcons />

                </Row>
                <Row noGutters="true" className="justify-content-center">
                    <Col className="col-md-auto text-center">
                        <small className="text-muted">©{new Date().getFullYear()} TRCIII</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer