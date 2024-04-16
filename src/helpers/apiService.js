import axios from "axios";

const apiUrl = "http://localhost:3000";

export const fetchAllDoctors = async () => {
    const { data } = await axios.get(apiUrl + "/doctors");
    return data;
};


export const scheduleAppointment = async (appointment) => {
    const response = await axios.post(apiUrl + "/appointments", appointment);
    return response.data;

};

export const getAppointmentsForDoctorAndDate = async (doctorId, date) => {
    const response = await axios.post(apiUrl + "/appointments?doctorId=" + doctorId + "&date=" + date);
    return response.data;
}

