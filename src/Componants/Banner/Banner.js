import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../Images/Banner/hospital.jpg'


const Banner = () => {

    return (
        <Container className='mb-5'>
            <Row className='d-flex align-items-center'>
                <Col className='col-lg-6'>
                    {/* <h1 className="theme-text">Patient Care Center</h1> */}
                    <h3 className='theme-text-2'>A Modern Patient And Health Care Center</h3>
                    <p>
                        Our speacialist doctors have tremendous experience with wide
                        range of diseases to serve the needs of our patients.</p>
                    <button className='btn btn-warning'>Learn More <FontAwesomeIcon icon={faArrowAltCircleRight} /> </button>
                </Col>

                <Col className='col-lg-6 p-1'>
                    <img src={banner} alt='' className='img-fluid' />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;