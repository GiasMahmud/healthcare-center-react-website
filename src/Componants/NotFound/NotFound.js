import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imgError1 from '../../Images/404 img.jpg'


const NotFound = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="col-lg-12">
                    <img src={imgError1} alt='' className="img-fluid" />
                </Col>

            </Row>
        </Container>
    );
};

export default NotFound;