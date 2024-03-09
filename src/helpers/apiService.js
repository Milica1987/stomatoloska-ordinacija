import axios from "axios";

const apiUrl = "http://localhost:3000/doctors";

export const fetchAllDoctors = async () => {
    const { data } = await axios.get(apiUrl);
    return data;
};