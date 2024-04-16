/* eslint-disable no-unused-vars */
//style
import "@styles/global.scss";
import "@styles/OnlineBooking.scss";

import "@helpers/apiService.js";
import TimeSlot from "../components/TimeSlot";

import { useState, useEffect, useRef } from "react";

//helpers
import { fetchAllDoctors, scheduleAppointment } from "@helpers/apiService.js";
import { useQuery, useMutation } from "@tanstack/react-query";

import { format } from "date-fns";

const OnlineBooking = () => {
  const currentDate = format(new Date(), "yyyy-MM-dd");

  const [timeSlot, setTimeSlot] = useState(null);

  const [errors, setErrors] = useState({});

  const formRef = useRef(null);

  const { isError, isLoading, data } = useQuery({
    queryKey: ["allDoctors"],
    queryFn: fetchAllDoctors,
  });

  const { mutate } = useMutation({
    mutationFn: scheduleAppointment,
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleTimeSlotClick = async (timeSlotInfo) => {
    setTimeSlot(timeSlotInfo.timeFrom);
  };

  useEffect(() => {
    if (timeSlot !== null) {
      formRef.current.requestSubmit();
    }
  }, [timeSlot]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointment = {
      doctorId: event.target.doctorId.value,
      date: event.target.date.value,
      phone: event.target.phone.value,
      time: timeSlot,
      service: event.target.service.value,
      patient: event.target.patient.value,
    };

    if (validateAppointment(appointment)) {
      console.log("spremno za slanje");
    } else {
      console.log(JSON.stringify(errors));
    }
  };

  const validateAppointment = (appointment) => {
    const errors = {};

    // Check if strings are not empty
    const stringFields = ["date", "patient", "phone"];
    stringFields.forEach((field) => {
      if (
        typeof appointment[field] === "string" &&
        appointment[field].trim() === ""
      ) {
        errors[field] = "Polje ne može biti prazno";
      }
    });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(appointment.email)) {
      errors.email = "Pogrešan format email adrese";
    }

    // Validate numbers are greater than zero
    const numberFields = ["doctorId"];

    numberFields.forEach((field) => {
      if (typeof appointment[field] === "number" && appointment[field] <= 0) {
        errors[field] = "Morate izabrati doktora";
      }
    });

    if (appointment.usluga === "Izaberite uslugu") {
      errors.usloga = "Morate izabrati uslugu";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="booking-container">
        <h2>Zakažite pregled</h2>
        <div className="booking">
          <div className="booking-column1">
            {errors.patient && <div className="error">{errors.patient}</div>}
            <input placeholder="Ime i prezime" name="patient" />

            {errors.phone && <div className="error">{errors.phone}</div>}
            <input placeholder="Telefon" name="phone" />

            {errors.email && <div className="error">{errors.email}</div>}
            <input placeholder="Email" name="email" />

            {errors.service && <div className="error">{errors.service}</div>}
            <select name="service">
              <option value="0">Izaberite uslugu</option>
              <option value="Hollywood smile">Hollywood smile</option>
              <option value="Popravka i lečenje zuba">
                Popravka i lečenje zuba
              </option>
              <option value="Skidanje kamenca i poliranje">
                Skidanje kamenca i poliranje{" "}
              </option>
              <option value="Izbeljivanje zuba">Izbeljivanje zuba</option>
              <option value="Ortodoncija">Ortodoncija</option>
              <option value="Parodontologija">Parodontologija</option>
            </select>
          </div>

          <div className="booking-column2">
            {errors.doctorId && <div className="error">{errors.doctorId}</div>}
            <select name="doctorId">
              <option value="0">Izaberite doktora</option>
              {data &&
                data.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
            </select>

            {errors.date && <div>{errors.date}</div>}
            <input type="date" name="date" defaultValue={currentDate} />

            <select name="termin">
              <option value="">Izaberite termin</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>      
            </select>

            <button type="submit">Zakaži</button>
          </div>
          {/* <div className="booking-column3">
            <TimeSlot
              key="09:00"
              timeFrom="09:00"
              timeTo="10:00"
              booked={false}
              onTimeSlotClick={handleTimeSlotClick}
            />
            <TimeSlot
              key="10:00"
              timeFrom="10:00"
              timeTo="11:00"
              booked={false}
              onTimeSlotClick={handleTimeSlotClick}
            />
            <TimeSlot
              key="11:00"
              timeFrom="11:00"
              timeTo="12:00"
              booked={false}
              onTimeSlotClick={handleTimeSlotClick}
            />
            <TimeSlot
              key="12:00"
              timeFrom="12:00"
              timeTo="13:00"
              booked={false}
              onTimeSlotClick={handleTimeSlotClick}
            />
            <TimeSlot
              key="13:00"
              timeFrom="13:00"
              timeTo="14:00"
              booked={false}
              onTimeSlotClick={handleTimeSlotClick}
            />
            <TimeSlot
              key="14:00"
              timeFrom="14:00"
              timeTo="15:00"
              booked={false}
              onTimeSlotClick={handleTimeSlotClick}
            />
            <TimeSlot
              key="15:00"
              timeFrom="15:00"
              timeTo="16:00"
              booked={false}
              onTimeSlotClick={handleTimeSlotClick}
            />
            <TimeSlot
              key="16:00"
              timeFrom="16:00"
              timeTo="17:00"
              booked={false}
              onTimeSlotClick={handleTimeSlotClick}
            />
          </div> */}
        </div>
      </div>
    </form>
  );
};

export default OnlineBooking;
