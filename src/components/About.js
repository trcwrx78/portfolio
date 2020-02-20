import React from 'react'
import Row from 'react-bootstrap/Row'

function About() {
    return (
        <Row noGutters="true" className="App-header">
            <div className="fade-in">
                <img src="/img/2020port.jpg" className="abo-img" />
                <h1>About</h1>
            </div>
        </Row>
    )
}

export default About