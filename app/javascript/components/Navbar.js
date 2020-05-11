/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-return-assign, jsx-a11y/anchor-is-valid, import/no-named-as-default */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faChartLine,
  faChartPie,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import SignoutBtn from './home/Signout';

const Navbar = () => (
  <footer id="sticky-footer" className="bg-grey fixed-bottom">
    <div className="container text-center">
      <ul className="row foot-row nav nav-pills tablist" role="tablist">
        <li className="col foot-col nav-item">
          <a onClick={() => window.location.href = '/addreading'} className="nav-link" data-toggle="pill" href="#">
            <FontAwesomeIcon icon={faChartBar} />
            <p>Add Readings</p>
          </a>
        </li>
        <li className="col foot-col nav-item">
          <a onClick={() => window.location.href = '/readings'} className="nav-link" data-toggle="pill" href="#">
            <FontAwesomeIcon icon={faChartLine} />
            <p>Track.it</p>
          </a>
        </li>
        <li className="col foot-col nav-item">
          <a onClick={() => window.location.href = '/report'} className="nav-link" data-toggle="pill" href="#">
            <FontAwesomeIcon icon={faChartPie} />
            <p>Report</p>
          </a>
        </li>
        <li className="col foot-col nav-item">
          <a className="nav-link" data-toggle="pill" href="#">
            <SignoutBtn />
            {/* <FontAwesomeIcon icon={faEllipsisH} />
            <p>More</p> */}
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Navbar;
