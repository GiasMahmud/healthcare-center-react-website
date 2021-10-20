import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faInfo, faBookMedical, faMedkit, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Form, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <Container className="mb-5">
                <h4 className='theme-text'>Our Features</h4>
                <h3 className='theme-text-2'>We Provide All Aspects Of Quality Services</h3>
                <hr className='theme-text hr' />
                <Row className='mt-5'>
                    <Col className='col-lg-3'>
                        <h1 className='theme-text text-light'><FontAwesomeIcon icon={faAddressBook} /></h1>
                        <h4 className='theme-text-2'>Our Vision</h4>
                        <p>To be at the level where help is sought to save lives</p>
                        <p>To be an institution that rises above pettiness to help humanity.</p>
                    </Col>
                    <Col className='col-lg-3'>
                        <h1 className='theme-text text-light'><FontAwesomeIcon icon={faInfo} /></h1>
                        <h4 className='theme-text-2'>Our Mission</h4>
                        <p>To become the most trusted premier institution serving the sufferings of humanity and people’s welfare oriented activities.</p>
                    </Col>
                    <Col className='col-lg-3'>
                        <h1 className='theme-text text-light'><FontAwesomeIcon icon={faBookMedical} /></h1>
                        <h4 className='theme-text-2'>Welfare Activities</h4>
                        <h6>Free Medical Camp:</h6>
                        <p>In several occation we arrange free medical camp. Our has a large budget set aside to meet such purposes.</p>
                    </Col>
                    <Col className='col-lg-3'>
                        <h1 className='theme-text text-light'><FontAwesomeIcon icon={faMedkit} /></h1>
                        <h4 className='theme-text-2'>Quality Policy</h4>
                        <p>We ensured at every steps from sample collection to testing, from diagnosis to reporting.</p>
                    </Col>
                </Row>
                <li>If you want to know more about us . Please contact us for better <a href='#home' className='theme-text'>information</a>.</li>

            </Container>
            <Container className='bg-light'>
                <Row>
                    <Col className='col-lg-6'>
                        <h2>Get in touch</h2>
                        <p>Get more information and share your opinion </p>
                        <br />
                        <h3>CONTACT INFO</h3>
                        <p> <FontAwesomeIcon icon={faMailBulk} /> info@patientcare.com</p>
                        <p> <FontAwesomeIcon icon={faPhone} /> +2541768492</p>
                        <p> <FontAwesomeIcon icon={faPhone} /> +5231081056</p>
                    </Col>
                    <Col className='col-lg-6'>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="+880" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label> Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                <button className="btn btn-warning m-5">Submit</button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AboutUs;