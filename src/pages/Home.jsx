import { Link } from "react-router-dom";
import "@styles/Home.scss";

const Home = () => {
    return ( 
    <div className="welcome-container">
    <div className="container">
        <h1>Dobro došli u našu ordinaciju</h1>
        <h4>Ovo je mesto gde dobijate najkvalitetniju negu zuba. 
            Kod nas su svi dobrodošli, jer je Vaše oralno zdravlje na prvom mestu.</h4>
        <h4>Naše osoblje će se postarati da se Vi i Vaša porodica osećate kao kod svoje kuće, 
            i nadamo se da ćemo nadmašiti vaša očekivanja.</h4>
    </div> 
    <Link to="/about">Saznajte više</Link>
    </div>

    );
}
 
export default Home;