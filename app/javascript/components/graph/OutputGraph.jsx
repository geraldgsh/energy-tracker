import React from 'react';

const Circle = (props) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <div className="circular-box">
        <div className="circular-dimension">{props.children}</div>
      </div>
    </div>
  );
}

export default Circle;
