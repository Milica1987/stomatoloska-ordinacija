//components
import Doctor from "@components/Doctor";

//style
import "@styles/OurTeam.scss";

//helpers
import { fetchAllDoctors } from "@helpers/apiService.js";
import { useQuery } from "@tanstack/react-query";

const OurTeam = () => {
  const { data } = useQuery({
    queryKey: ["allDoctors"],
    queryFn: fetchAllDoctors,
  });

  return (
    <div className="our-team">
      <h2>Naš lekarski tim</h2>
      <p>
        Iako najčešće u praksi rešavamo postojeće stomatološke probleme, snažno
        se zalažemo za preventivnu negu. O zdavlju i lepoti Vaših zuba brinu:
      </p>
      <div className="doctors">
        {data &&
          data.map((doctor) => <Doctor key={doctor.id} doctor={doctor} />)}
      </div>
    </div>
  );
};

export default OurTeam;
