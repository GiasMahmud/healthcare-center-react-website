import React from 'react';
import { Card } from 'react-bootstrap';


const Doctor = ({ doctor }) => {
    const { img, name, position } = doctor
    return (
        <Card className="col-lg-4 align-items-center p-1 rounded">
            <Card.Img variant="top" src={img} className="rounded-circle w-75" />
            <Card.Body>
                <Card.Title className="txt-custom">{name}</Card.Title>
                <Card.Text>
                    {position}
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default Doctor;