import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);


    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (

        <div>
            <Container className='mt-5 p-5 bg-info'>
                <h1 className="txt-custom">Our Specialist Doctors</h1>
                <Row>
                    {
                        doctors.map(doctor => <Doctor
                            doctor={doctor}
                            key={doctor.id}

                        ></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;