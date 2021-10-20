import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [serviceDetail, setServiceDetai] = useState({});

    useEffect(() => {
        fetch(`/service${id}.json`)
            .then(res => res.json())
            .then(data => setServiceDetai(data))
    }, []);

    return (
        <Container>
            <h1>{serviceDetail.title}</h1>
            <Row>
                <Col className='col-lg-12'>
                    <img src={serviceDetail.img} alt="" className="img-fluid" />
                </Col>

                <Col className='col-lg-12'>
                    <h4>{serviceDetail.description}</h4>
                    <h3>{serviceDetail.details}</h3>
                </Col>

            </Row>
        </Container>

    );
};

export default Details;