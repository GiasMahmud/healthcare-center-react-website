import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setInfos(data))
    }, [])
    return (
        <div>
            <Container className='mt-5 p-5 bg-info'>
                <Row>
                    {
                        infos.map(info => <Service
                            info={info}
                            key={info.id}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;