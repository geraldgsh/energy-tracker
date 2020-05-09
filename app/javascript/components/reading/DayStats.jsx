/* eslint-disable react/no-unused-state */
import React from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Circle from '../graph/OutputGraph';

export class DailyStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reading: [
        {

        },
      ],
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const { units } = this.state;
    axios.get(`/api/v1/user/${params.userId}/reading/${params.id}`, { units })
      .then((response) => response.data)
      .then((response) => {
        if (response.code === 200) {
          this.setState({
            reading: response.data,
          });
          console.log(response.data);
        } else if (response.code === 401) {
          this.setState({
            errors: response.errors,
          });
        }
      });
  }

  render() {
    const percentage = 66;
    const { reading } = this.state;
    const entry = reading.map((read) => (
      <div className="daily-stats">
        <div className="row reading-header">
          <h4>{moment(read.created_at).format('DD MMM YYYY')}</h4>
        </div>
        <div className="row graph-box">
          <div className="row">
            <div className="col">
              <Circle>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}Units`}
                  strokeWidth={5}
                  styles={buildStyles({
                    textColor: '#4b627a',
                    pathColor: '#94e490',
                  })}
                />
              </Circle>
              <div className="text-center">
                <h6>Total</h6>
                <h6>Consumption</h6>
              </div>
            </div>
            <div className="col">
              <Circle>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}Units`}
                  strokeWidth={5}
                  styles={buildStyles({
                    textColor: '#4b627a',
                    pathColor: '#94e490',
                  })}
                />
              </Circle>
              <div className="text-center">
                <h6>Available</h6>
                <h6>Units</h6>
              </div>
            </div>
            <div className="col">
              <Circle>
                <CircularProgressbar
                  value={read.saved}
                  text={`${read.saved}%`}
                  strokeWidth={5}
                  styles={buildStyles({
                    textColor: '#4b627a',
                    pathColor: '#94e490',
                  })}
                />
              </Circle>
              <div className="text-center">
                <h6>
                  {read.saved}
                  %
                  {' '}
                  saved
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="rows">
          <div className="row">
            <div className="col room-card">
              <div className="row">
                <div className="col">
                  <i className="fas fa-bed fa-4x" />
                </div>
                <div className="col">
                  <p>Bedroom</p>
                  <h4>
                    {read.bedroom}
                    {' '}
                    Units
                  </h4>
                </div>
              </div>
            </div>
            <div className="col room-card">
              <div className="row">
                <div className="col">
                  <i className="fas fa-laptop fa-4x" />
                </div>
                <div className="col">
                  <p>Study</p>
                  <h4>
                    {read.study}
                    {' '}
                    Units
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col room-card">
              <div className="row">
                <div className="col">
                  <i className="fas fa-car fa-4x" />
                </div>
                <div className="col">
                  <p>Garage</p>
                  <h4>
                    {read.garage}
                    {' '}
                    Units
                  </h4>
                </div>
              </div>
            </div>
            <div className="col room-card">
              <div className="row">
                <div className="col">
                  <i className="fas fa-couch fa-4x" />
                </div>
                <div className="col">
                  <p>Living</p>
                  <h4>
                    {read.living}
                    {' '}
                    units
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col room-card">
              <div className="row">
                <div className="col">
                  <i className="fas fa-utensils fa-4x" />
                </div>
                <div className="col">
                  <p>Kitchen</p>
                  <h4>
                    {read.kitchen}
                    {' '}
                    Units
                  </h4>
                </div>
              </div>
            </div>
            <div className="col room-card">
              <div className="row">
                <div className="col">
                  <i className="fas fa-user-clock fa-4x" />
                </div>
                <div className="col">
                  <p>Guest</p>
                  <h4>
                    {read.kitchen}
                    {' '}
                    Units
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <>
        <div>
          {reading.length > 0 ? entry : 'error!'}
        </div>
      </>
    );
  }
}

DailyStats.propTypes = {
  match: PropTypes.bool.isRequired,
};

export default DailyStats;
