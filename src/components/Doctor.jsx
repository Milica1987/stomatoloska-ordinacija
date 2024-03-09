/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import "@styles/Doctor.scss";

import "@helpers/apiService.js";

const Doctor = ({ doctor }) => {
  return (
    <div className="doctor-container">
      <div className="doctor-content">
        <div className="doctor-img">
          <img className="img" src={`/doctors/${doctor.img}`} alt="picture" />
        </div>
        <div className="doctor-info">
          <h4>{doctor.name}</h4>
          <span>{doctor.position}</span>
          <p>{doctor.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
