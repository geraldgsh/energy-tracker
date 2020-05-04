import React from 'react';
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Circle = (props) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <div className="circular-box">
        <div className="circular-dimension">{props.children}</div>
      </div>
    </div>
  );
}

class DayStats extends React.Component {

  render() {
    const percentage = 66;
    return (
      <React.Fragment>        
        <div className="daily-stats">
          <div className="row reading-header">
            <h4>24-September-2019</h4>
          </div>
          <div className="row graph-box">
	          <div className="row">
		          <div className="col">
                <Circle>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={5}
                    styles={buildStyles({
                      textColor: "#4b627a",
                      pathColor: "#94e490",
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
                    text={`${percentage} Units`}
                    strokeWidth={5}
                    styles={buildStyles({
                      textColor: "#4b627a",
                      pathColor: "#94e490",
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
                    value={percentage}
                    text={`${percentage} Units`}
                    strokeWidth={5}
                    styles={buildStyles({
                      textColor: "#4b627a",
                      pathColor: "#94e490",
                    })}
                  />
                </Circle>
                <div className="text-center">
                  <h6>% saved</h6>
                </div>
              </div>        
            </div>
          </div>
          <div className="rows">
            <div className="row">
              <div className="col room-card">
                <div className="row">
                  <div className="col">
                    <i className="fas fa-bed fa-4x"></i>
                  </div>
                  <div className="col">
                    <p>Bedroom</p>
                    <h4>8 Units</h4>
                  </div>
                </div>                
              </div>
              <div className="col room-card">
                <div className="row">
                  <div className="col">
                    <i className="fas fa-laptop fa-4x"></i>
                  </div>
                  <div className="col">
                    <p>Study</p>
                    <h4>8 Units</h4>
                  </div>
                </div>  
              </div>
            </div>
            <div className="row">
              <div className="col room-card">
                <div className="row">
                  <div className="col">
                    <i className="fas fa-car fa-4x"></i>
                  </div>
                  <div className="col">
                    <p>Garage</p>
                    <h4>8 Units</h4>
                  </div>
                </div>
              </div>
              <div className="col room-card">
                <div className="row">
                  <div className="col">
                    <i className="fas fa-couch fa-4x"></i>
                  </div>
                  <div className="col">
                    <p>Living</p>
                    <h4>8 Units</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col room-card">
                <div className="row">
                  <div className="col">
                    <i className="fas fa-utensils fa-4x"></i>
                  </div>
                  <div className="col">
                    <p>Kitchen</p>
                    <h4>8 Units</h4>
                  </div>
                </div>
              </div>
              <div className="col room-card">
                <div className="row">
                  <div className="col">
                    <i className="fas fa-user-clock fa-4x"></i>
                  </div>
                  <div className="col">
                    <p>Guest</p>
                    <h4>8 Units</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </React.Fragment>
    )
  }
}

export default DayStats;