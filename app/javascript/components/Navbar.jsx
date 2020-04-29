import React from "react";

const Navbar = () => (
  <footer id="sticky-footer" className="bg-grey fixed-bottom">
    <div className="container text-center">
      <ul className="row foot-row nav nav-pills tablist" role="tablist">
        <li className="col foot-col nav-item">
          <a className="nav-link" data-toggle="pill" href="#readings">
            <i className="fas fa-chart-bar"></i>
            <p>Add Readings</p>
          </a>              
        </li>
        <li className="col foot-col nav-item">
          <a className="nav-link" data-toggle="pill" href="#track">
            <i className="fas fa-chart-line"></i>
            <p>Track.it</p>
          </a>              
        </li>
        <li className="col foot-col nav-item">
          <a className="nav-link" data-toggle="pill" href="#report">
            <i className="fas fa-chart-pie"></i>
            <p>Report</p>
          </a>              
        </li>
        <li className="col foot-col nav-item">
          <a className="nav-link" data-toggle="pill" href="#more">
            <i className="fas fa-ellipsis-h"></i>
            <p>More</p>
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Navbar;