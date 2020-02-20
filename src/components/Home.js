import React from 'react'
import Typist from 'react-typist'
import Row from 'react-bootstrap/Row'

function Home() {
    return (
        <Row noGutters="true" className="App-header page">
            <Typist cursor={{
                show: false
                }}>
                <h1>Hello!</h1>
                <Typist.Delay ms={500} />
                <br />
                <p>My name is Torrence. I am testing out this typing thing.</p>
            </Typist>
        </Row>
    )
}

export default Home