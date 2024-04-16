/* eslint-disable react/prop-types */

import "@styles/TimeSlot.scss";

const TimeSlot = ({ timeFrom, timeTo, booked, onTimeSlotClick }) => {

  //const [selected, setSelected] = useState(false);

  const handleButtonClick = () => {
    // Call the function passed from the parent with the TimeSlot info
    onTimeSlotClick({ timeFrom, timeTo });
  };

  return (
    <div className="time-slot">
      <label className="time">{timeFrom}h - {timeTo}h</label>
      {booked ? (
        <label className="booked">Termin nije slobodan.</label>
      ) : (
        <button type="button" onClick={handleButtonClick}>Zakaži</button>
      )}
    </div>
  );
};

export default TimeSlot;
