import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 bg-dark text-light">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Stay Patient Care Stay Safe</h5>
                        <p>We are not in favor of remedy, we are in favor of prevention.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Quick Access</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Home </a></li>
                            <li><a href="#!">Services</a></li>
                            <li><a href="#!">Doctors</a></li>
                            <li><a href="#!">About Us</a></li>
                        </ul>
                    </div>


                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> Al right are reserved by Md Gias Uddin</a>
            </div>

        </footer>
    );
};

export default Footer;