import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
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
      reading:
        {
          bedroom: '',
          living: '',
          study: '',
          guest: '',
          kitchen: '',
          saved: '',
          available: '',
          consumption: '',
        },
      user: {
        units: '',
      },
    };
  }

  async componentDidMount() {
    const { userId, id } = this.props;
    const { units } = this.state;
    try {
      const [userData, readingData] = await axios.all([
        axios.get(`/api/v1/users/${userId}`, { units }),
        axios.get(`/api/v1/user/${userId}/reading/${id}`, { units }),
      ]);
      if (userData.data.code === 200 && userData.data.code === 200) {
        this.setState({
          reading: readingData.data.data,
          user: userData.data.data,
        });
      }
    } catch (err) {
      throw err.message;
    }
  }

  render() {
    const { reading, user } = this.state;
    const quota = (Number(user.units) / 30);
    const consumptionPc = Math.floor(((Number(reading.consumption)) / quota) * 100);
    const availablePC = Math.floor(((Number(reading.available)) / quota) * 100);
    return (
      <>
        <div>
          <div className="daily-stats" index={reading.id}>
            <div className="row reading-header">
              <h4>{moment(reading.created_at).format('DD MMM YYYY')}</h4>
            </div>
            <div className="row graph-box">
              <div className="row">
                <div className="col">
                  <Circle>
                    <CircularProgressbar
                      value={consumptionPc}
                      text={`${reading.consumption} Units`}
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
                      value={availablePC}
                      text={`${reading.available} Units`}
                      strokeWidth={5}
                      styles={buildStyles({
                        textColor: '#4b627a',
                        pathColor: '#94e490',
                      })}
                    />
                  </Circle>
                  <div className="text-center">
                    <h6>Available</h6>
                    <h6>Units left</h6>
                  </div>
                </div>
                <div className="col">
                  <Circle>
                    <CircularProgressbar
                      value={reading.saved}
                      text={`${reading.saved}%`}
                      strokeWidth={5}
                      styles={buildStyles({
                        textColor: '#4b627a',
                        pathColor: '#94e490',
                      })}
                    />
                  </Circle>
                  <div className="text-center">
                    <h6>
                      {reading.saved}
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
                        {reading.bedroom}
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
                        {reading.study}
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
                        {reading.garage}
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
                        {reading.living}
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
                        {reading.kitchen}
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
                        {reading.guest}
                        {' '}
                        Units
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

DailyStats.propTypes = {
  userId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DailyStats;
