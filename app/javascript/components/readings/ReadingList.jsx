import React from 'react';
import axios from 'axios';
import moment from 'moment';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import Circle from '../graph/ReadGraph';


class ReadingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readings: [],
    };
  }

  componentDidMount() {
    const userID = JSON.parse(localStorage.getItem('redux')).id;
    const { units } = this.state;
    axios.get(`/api/v1/readings/user/${userID}`, { units })
      .then((response) => response.data)
      .then((response) => {
        if (response.code === 200) {
          this.setState({
            readings: response.data,
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
    const { readings } = this.state;
    const allReadings = readings.map((reading) => (
      <div className="row list" key={reading.id}>
        <div className="col-2 container graph">
          <Circle>
            <CircularProgressbar
              value={reading.saved}
              styles={buildStyles({
                textColor: '#4b627a',
                pathColor: '#94e490',
              })}
            />
          </Circle>
        </div>
        <div className="col">
          <div className="row container date-list">
            {moment(reading.created_at).format('MMM DD YYYY')}
          </div>
          <div className="row container saving-list">
            <span>
              Units saved:
              {' '}
              {reading.saved}
              %
            </span>
          </div>
        </div>

        <div className="col-3 container graph-valuebox">
          <div className="row graph-value">
            {reading.available}
            <span className="read-units">Units</span>
            <br />
            <span className="read-sym"><i className="fas fa-angle-right" /></span>
          </div>
        </div>
      </div>
    ));
    return (
      <>
        <div className="readlist">
          {readings.length > 0 ? allReadings : ''}
        </div>
      </>
    );
  }
}


export default ReadingList;
