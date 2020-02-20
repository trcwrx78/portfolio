import React from 'react'
import Col from 'react-bootstrap/Col'

function FootTweets() {
    return (
        <Col lg={5} xl={4} className="mt-3 mt-lg-0">
        <a className="twitter-timeline" 
            data-height="300" 
            data-theme="dark"
            href="https://twitter.com/TRC_3?ref_src=twsrc%5Etfw">Tweets by TRC_3</a> 
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> 
        </Col>
    )
}

export default FootTweets