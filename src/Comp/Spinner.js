import React from 'react';
import loading from "./Spinner-1s-50px.gif";

function Spinner() {
  return (
    <div className='text-center'>
      <img src={loading} alt="loading" />
    </div>
  );
}

export default Spinner;
