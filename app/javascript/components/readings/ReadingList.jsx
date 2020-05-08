import React from 'react';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Circle from '../graph/ReadGraph';

const ReadingList = () => {
  const percentage = 66;
  return (
    <>
      <div className="readlist">
        <div className="row list">
          <div className="col-2 container graph">
            <Circle>
              <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                  textColor: '#4b627a',
                  pathColor: '#94e490',
                })}
              />
            </Circle>
          </div>
          <div className="col">
            <div className="row container date-list">
              Sep 13 2013
            </div>
            <div className="row container saving-list">
              Units saved: 10%
            </div>
          </div>

          <div className="col-3 container graph-valuebox">
            <div className="row graph-value">
              20
              <span className="read-units">Units</span>
              <br />
              <span className="read-sym"><i className="fas fa-angle-right" /></span>
            </div>
          </div>
        </div>
        <div className="row list">
          <h4>25-September-2019</h4>
        </div>
      </div>
    </>
  );
};

export default ReadingList;
