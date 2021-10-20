import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ info }) => {
    const { title, description, img, id } = info;
    return (
        <Card className="col-lg-4">
            <Card.Body>
                <Card.Img className="" src={img} />
                <Card.Title>{title}</Card.Title>
                <Card.Text className='txt-custom'>
                    {description}
                </Card.Text>
                <Link to={`/details/${id}`}>
                    <button className='btn btn-warning'>Details</button>
                </Link>
            </Card.Body>

        </Card>
    );
};

export default Service;