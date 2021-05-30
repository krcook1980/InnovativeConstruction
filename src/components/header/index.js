import React from 'react';
import SlideRight from '../slideright';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './style.css'


export default function index() {
    return (
        <Jumbotron fluid  >
            <Container className="text-center">
                <Row>
                    <Col md="12" className="text-center">

                        <SlideRight />
                        <hr/>
                        <div class="mt-2">
                            <p class="lead ">General Contractor</p>
                            <p class="text-muted ">Licensed and Insured</p>
                        </div>
                        <hr/>
                    </Col>
                </Row>

            </Container>

        </Jumbotron>
    )
}
