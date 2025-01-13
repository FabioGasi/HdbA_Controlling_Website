import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AppFooter() {
  return (
    <div className="main-footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/*column 1*/}
          <div className="col-md-4 col-sm-6">
            <h3>Navigation</h3>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#introduction" className="footer-link">
                  HOME
                </a>
              </li>
              <li>
                <a href="#fact-section" className="footer-link">
                  WARUM GREEN CONTROLLING
                </a>
              </li>
              <li>
                <a href="#general-facts" className="footer-link">
                  AUSGANGSLAGE
                </a>
              </li>
              <li>
                <a href="#concept-section" className="footer-link">
                  KONZEPT BA
                </a>
              </li>
              <li>
                <a href="#calculator-section" className="footer-link">
                  GRÜN-RECHNER
                </a>
              </li>
            </ul>
          </div>

          {/*column 2*/}
          <div className="col-md-4 col-sm-6">
            <h3>Projektarbeit</h3>
            <ul className="list-unstyled footer-links">
              <li>
                <a
                  href="https://drive.google.com/file/d/1HtN4q10k_BSL97Wmf95NKur1LK6ooUuA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  PROJEKTBERICHT
                </a>
              </li>
            </ul>
          </div>

          {/*column 3*/}
          <div className="col-md-4 col-sm-6">
            <h3>Kontakt</h3>
            <ul className="list-unstyled footer-links">
              <li>
                <span className="footer-text">
                  Hochschule der Bundesagentur für Arbeit
                </span>
              </li>
              <li>
                <span className="footer-text">
                  University of Applied Labour Studies
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/*footer bottom*/}
        <div className="row mt-4 border-top pt-3">
          <div className="col-md-12">
            <div className="copyright">
              <p className="text-center">
                &copy;{new Date().getFullYear()} Eine Initiative der Hochschule
                der Bundesagentur für Arbeit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
