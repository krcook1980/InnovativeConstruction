import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './style.css'

export default function Main() {
    return (
        <Container className="text-center">
            <Row>
                <Col md="12">
                    <h1 class="text-center headings"><small>Proudly serving Park City, UT and Star Valley, WY</small></h1>

                    <p class="text-justify m-4 words">General Contractor and Excavating Contractor specializing in design builds,
                    troubleshooting and building the impossible! If you can dream it, we can
                    build it! When you are ready to build your home or barn,
                    we are the perfect company for the job. Family owned and proudly operated. Licensed General Contractor,
          fully insured.</p>

                </Col>
            </Row>
            <Row>
                <Col md='12'>

                    <h3 class="text-center headings"> Specializing in Excavation</h3>

                    <p class="text-justify m-4 words">With 20 years in the business, we specialize in excavation. From footings and foundations, to rock walls and berms, we have the experience and equipment to get the job done. Attention to detail is everything.</p>

                </Col>
            </Row>
            <Row>
                <Col md="12" className="mb-3">

                    <h3 class="text-center headings">
                      Check us out on:
          <a href="https://www.facebook.com/Innovative-Construction-Services-100988848713897" target="_blank" className="words pl-2"> Facebook!</a> </h3>
                    <Button className="btn-dark btn text-white rounded text-center mt-4 "><a href="mailto:innovativeconstruction@outlook.com" class="text-white " >
                       Click here to Email us for more information or an estimate.</a>
                    </Button>
                </Col>
            </Row>


        </Container>
    )
}
