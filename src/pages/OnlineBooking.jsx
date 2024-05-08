/* eslint-disable no-unused-vars */
//style
import "@styles/global.scss";
import "@styles/OnlineBooking.scss";

import "@helpers/apiService.js";
import { useNavigate } from "react-router-dom";

import { useState, useEffect, useRef } from "react";

//helpers
import { fetchAllDoctors, scheduleAppointment } from "@helpers/apiService.js";
import { useQuery, useMutation } from "@tanstack/react-query";

import { format } from "date-fns";
import { getAppointmentsForDoctorAndDate } from "../helpers/apiService";

import Dialog from '@components/Dialog';

const OnlineBooking = () => {
  const currentDate = format(new Date(), "yyyy-MM-dd");

  //const [timeSlot, setTimeSlot] = useState(null);

  const [errors, setErrors] = useState({});

  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const navigate = useNavigate();

  const selectedDoctorRef = useRef();
  const selectedDateRef = useRef();

  const { isError, isLoading, data } = useQuery({
    queryKey: ["allDoctors"],
    queryFn: fetchAllDoctors,
  });

  const [availableTermins, setAvailableTermins] = useState([
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ]);

  const openDialog = () => {
    setIsOpenDialog(true);
  };

  const closeDialog = () => {
    setIsOpenDialog(false);
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointment = {
      doctorId: event.target.doctorId.value,
      date: event.target.date.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      time: event.target.termin.value,
      service: event.target.service.value,
      patient: event.target.patient.value,
    };

    if (validateAppointment(appointment)) {
      console.log("spremno za slanje");
      scheduleAppointment(appointment);
      openDialog();
     // alert('Vaš termin je uspešno zakazan');
    //  navigate("/");
      
    } else {
      console.log(JSON.stringify(errors));
    }
  };
  const refreshTermins = async () => {
    const selectedDoctor = selectedDoctorRef.current.value;
    const selectedDate = selectedDateRef.current.value;
    console.log("Selected Doctor:", selectedDoctor);
    console.log("Selected Date:", selectedDate);
    if (selectedDate && selectedDoctor > 0) {

      const allTermins = [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
      ];

      const appointments = await getAppointmentsForDoctorAndDate(
        selectedDoctorRef.current.value,
        selectedDateRef.current.value
      );
      // Extract booked termins from appointments
      const bookedTermins = appointments.map((appointment) => appointment.time);

      // Filter available termins
      const filteredTermins = allTermins.filter(
        (termin) => !bookedTermins.includes(termin)
      );

      // Set available termins state
      setAvailableTermins(filteredTermins);

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
     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
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

    if (appointment.service === "Izaberite uslugu") {
      errors.service = "Morate izabrati uslugu";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  return (
    <form onSubmit={handleSubmit}>
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
              <option value="Izaberite uslugu">Izaberite uslugu</option>
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
            <select
              name="doctorId"
              onChange={refreshTermins}
              ref={selectedDoctorRef}
            >
              <option value="0">Izaberite doktora</option>
              {data &&
                data.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
            </select>

            {errors.date && <div>{errors.date}</div>}
            <input
              type="date"
              name="date"
              defaultValue={currentDate}
              onChange={refreshTermins}
              ref={selectedDateRef}
            />

            <select name="termin">
              {availableTermins.length !== 0 ? (
                <option>Izaberite termin</option>
              ) : (
                <option>Nema slobodnih termina</option>
              )}

              {availableTermins.map((termin) => (
                <option key={termin} value={termin}>
                  {termin}
                </option>
              ))}
            </select>
            <button type="submit">Zakaži</button>
          </div>
        </div>
      </div>

      <Dialog isOpen={isOpenDialog} onClose={closeDialog}>
        <p>Vaš termin je uspešno zakazan!</p>
      </Dialog>
      
    </form>
    
    
  );
};

export default OnlineBooking;
