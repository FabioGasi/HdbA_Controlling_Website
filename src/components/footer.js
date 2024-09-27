import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppFooter() {
    return(
        <div className="main-footer bg-dark text-light py-4">
            <div className="container">
                <div className="row">


                    {/*column 1*/} 
                    <div className="col-md-4 col-sm-6">
                        <h3>Allgemeines</h3>
                        <ul className="list-unstyled footer-links">
                            <li>
                                <a href="#home" className="footer-link">HOME</a>
                            </li>
                            <li>
                                <a href="#home" className="footer-link">ALLGEMEINES</a>
                            </li>
                            <li>
                                <a href="#home" className="footer-link">allgemeines2</a>
                            </li>
                            <li>
                                <a href="#home" className="footer-link">allgemeines3</a>
                            </li>
                        </ul>
                    </div>
                    
                    {/*column 2*/}
                    <div className="col-md-4 col-sm-6">
                        <h3>Fallstudie</h3>
                        <ul className="list-unstyled footer-links">
                            <li>
                                <a href="#home" className="footer-link">LIEGENSCHAFTEN</a>
                            </li>
                            <li>
                                <a href="#home" className="footer-link">KENNZAHLEN</a>
                            </li>
                            <li>
                                <a href="#home" className="footer-link">Bla</a>
                            </li>
                            <li>
                                <a href="#home" className="footer-link">Bla</a>
                            </li>
                        </ul>
                    </div>

                    {/*column 3*/}
                    <div className="col-md-4 col-sm-6">
                        <h3>Wie grün bist du?</h3>
                        <ul className="list-unstyled footer-links">
                            <li>
                                <a href="#home" className="footer-link">RECHNER</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*footer bottom*/}
                <div className="row mt-4 border-top pt-3">
                    <div className="col-md-12">
                        <div className="copyright">
                            <p className="text-center"> &copy;{new Date().getFullYear()} Eine Initiative der Hochschule der Bundesagentur für Arbeit </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}