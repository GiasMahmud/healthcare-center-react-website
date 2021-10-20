import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from "../../hook/useAuth";
import { useHistory, useLocation } from 'react-router';
import './page.css';


const SigningUp = () => {
    const { handleRegistration, isLogin, handleGooleSignIn, handleNameChange, handleEmailChange, handlePasswordChange, toggleLogin, error, processLogin, handleResetPassword } = useAuth()
    const location = useLocation();
    const history = useHistory()
    let { from } = location.state || { from: { pathname: "/" } };

    const Login = () => {
        processLogin(from, history)
    }

    const handleGoogleAndRedirect = () => {
        handleGooleSignIn()
            .then(res => {
                history.push(location.state?.from || '/home')
            })

    }


    return (
        <Container className="bg-info" >
            <Row>
                <Col className="col-lg-12">
                    <form onSubmit={handleRegistration}>
                        <h3 className="txt-custom h-cust m-4">Please {isLogin ? 'Login' : 'Register'}</h3>
                        {!isLogin && <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                            </div>
                        </div>}
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label txt-custom" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger">{error}</div>
                        <button onClick={Login} type="submit" className="btn btn-warning m-1">
                            {isLogin ? 'Login' : 'Register'}
                        </button>

                    </form>
                </Col>
                <Col className="col-lg-12">
                    <h1 className='txt-custom m-5'>OR</h1>
                    <button className='btn btn-custom m-2' onClick={handleGoogleAndRedirect}><FontAwesomeIcon icon={faGoogle} /></button>


                </Col>
            </Row>
        </Container>
    );
};

export default SigningUp;