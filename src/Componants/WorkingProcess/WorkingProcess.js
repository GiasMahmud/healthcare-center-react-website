import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faInfo, faBookMedical, faMedkit } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const WorkingProcess = () => {
    return (
        <Container className="mb-5 bg-danger text-light">
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
            <li>If you have difficulty understanding our work process. Please contact us for better <Link className='theme-text' to='/aboutus'>informaion</Link></li>
        </Container>
    );
};

export default WorkingProcess;