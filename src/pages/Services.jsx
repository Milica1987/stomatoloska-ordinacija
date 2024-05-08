import "@styles/Services.scss";
import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="services-container">
      <div className="section-title">
        <h2>Usluge koje nudimo</h2>
        <p>
          Naš stručni tim stomatoloških profesionalaca koristi najsavremeniju
          tehnologiju i pristup usredsređen na pacijenta kako bi pružio širok
          spektar usluga. Verujte nam da ćemo vam pomoći da postignete optimalno
          oralno zdravlje i samouveren osmeh.
        </p>
      </div>
      <div className="services">
        <div className="first">
          <ul className="nav-tab">
            <li>
              <a
                className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
                href="#"
                onClick={() => handleTabClick("tab1")}
              >
                Hollywood smile
              </a>
            </li>
            <li>
              <a
                className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
                href="#"
                onClick={() => handleTabClick("tab2")}
              >
                Popravka i lečenje zuba
              </a>
            </li>
            <li>
              <a
                className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}
                href="#"
                onClick={() => handleTabClick("tab3")}
              >
                Skidanje kamenca i poliranje
              </a>
            </li>
            <li>
              <a
                className={`nav-link ${activeTab === "tab4" ? "active" : ""}`}
                href="#"
                onClick={() => handleTabClick("tab4")}
              >
                Izbeljivanje zuba
              </a>
            </li>
            <li>
              <a
                className={`nav-link ${activeTab === "tab5" ? "active" : ""}`}
                href="#"
                onClick={() => handleTabClick("tab5")}
              >
                Ortodoncija
              </a>
            </li>
            <li>
              <a
                className={`nav-link ${activeTab === "tab6" ? "active" : ""}`}
                href="#"
                onClick={() => handleTabClick("tab6")}
              >
                Parodontologija
              </a>
            </li>
          </ul>
        </div>
        <div className="second">
          {activeTab === "tab1" && (
            <>
              <div className="service">
                <h3>Hollywood smile</h3>
                <p>
                  Hollywood smile je totalni preobražaj osmeha tj. kompletna
                  protetska rekonstrukcija obe vilice korišćenjem navlaka,
                  faseta a često i implanata. Hollywood smile podrazumeva izradu
                  zubnih krunica na svim zubima ili barem na vidljivim zubima
                  gornje i donje vilice, odnosno minimum od petice do petice.
                  Sam naziv Hollywood smile potiče iz SAD i podrazumeva
                  korišćenje izrazito bele boje za krunice i fasete, odnosno
                  bleach boje.
                </p>
              </div>
              <div className="img-container">
                <img src="/services/osmeh.jpeg" alt="Hollywood smile" />
              </div>
            </>
          )}
          {activeTab === "tab2" && (
            <>
              <div className="service">
                <h3>Popravka i lečenje zuba</h3>
                <p>
                  Naša usta su dom milionima bakterija. Bakterije jedu šećere
                  prisutne u ustima i pretvaraju ih u kiselinu. Ova kiselina
                  oštećuje zube i izaziva karijes. Popravka zuba najčešće
                  podrazumeva popravku kvara na zubu u vidu karijesa. Potrebno
                  je ukloniti i očistiti rupu od karijesa i okolnu zahvaćenu
                  gleđ, a zatim plombom zaliti to mesto i vratiti zubu njegov
                  prirodan oblik. Kada je lečenje zuba u pitanju, problem
                  najčešće u unutrašnjosti zuba. U svim situacijama je cilj
                  isti, a to je spašavanje zuba od propadanja
                </p>
              </div>
              <div className="img-container">
                <img
                  src="/services/instrumenti.jpeg"
                  alt="Popravka i lečenje zuba"
                />
              </div>
            </>
          )}
          {activeTab === "tab3" && (
            <>
              <div className="service">
                <h3>Skidanje kamenca i poliranje zuba</h3>
                <p>
                  Skidanje kamenca sa zuba je najbolji preventivni metod protiv
                  upale desni i gubitka zuba. Ovaj bezbolan proces bi trebalo da
                  praktikujete kada god se za to ukaže prilika, odnosno kada
                  uočite da se na vašim zubima pojavio kamenac u vidu žutih ili
                  crnih naslaga. Kamenac može da iritira desni i veoma lako
                  izazove njihovu upalu. Zbog toga je uklanjanje kamenca
                  najbolja preventivna metoda.
                </p>
              </div>
              <div className="img-container">
                <img
                  src="/services/instrumenti2.jpeg"
                  alt="Skidanje kamenca i poliranje zuba"
                />
              </div>
            </>
          )}

          {activeTab === "tab4" && (
            <>
              <div className="service">
                <h3>Izbeljivanje zuba</h3>
                <p>
                  Sa modernim rešenjima i pristupima u estetskoj stomatologiji,
                  beljenje zuba je sigurno jedan od najefektivnijih načina da
                  dođete do željenog osmeha. Ukoliko se odlučite na izbeljivanje
                  zuba, onda to možete učiniti na dva načina: ordinacijsko
                  beljenje i izbeljivanje zuba kod kuće Obe procedure su
                  bazirane na upotrebi gela različite koncentracije koji je na
                  bazi karbamid peroksida. Koncentracija gela koji se nanosi na
                  zube je direktno vezana za efekat i intezitet beljenja zuba.
                </p>
              </div>
              <div className="img-container">
                <img
                  src="/services/izbeljivanje-zuba.jpeg"
                  alt="Izbeljivanje zuba"
                />
              </div>
            </>
          )}

          {activeTab === "tab5" && (
            <>
              <div className="service">
                <h3>Ortodoncija</h3>
                <p>
                  Specijalnost Ortodoncije fokusira se na dijagnostiku i tretman
                  nepravilnosti zuba i vilice. Ovo područje stomatologije
                  koristi različite metode, uključujući tradicionalne bravice,
                  prozirne aparate i retencije, kako bi se postigao optimalan
                  položaj zuba, poboljšao zagrižaj i estetika osmeha. Zakažite
                  pregled gde ćete se detaljno upoznati sa vašim planom terapije
                  i složenosti vašeg slučaja. Hajde da zajedno dođemo do vašeg
                  savršenog osmeha.
                </p>
              </div>
              <div className="img-container">
                <img src="/services/ortodoncija.jpeg" alt="Ortodoncija" />
              </div>
            </>
          )}
          {activeTab === "tab6" && (
            <>
              <div className="service">
                <h3>Parodontologija</h3>
                <p>
                  Parodontologija se bavi proučavanjem i tretmanom bolesti desni
                  i potpornog tkiva zuba radi očuvanja oralnog zdravlja. Ova
                  grana stomatologije ima ključnu ulogu u održavanju dugoročnog
                  oralnog zdravlja. Blagovremenim lečenjem ovih oboljenja možemo
                  izbeći njihove neprijatne komplikacije, kao i njihovu krajnju
                  posledicu-gubitak zuba. Redovan odlazak kod stomatologa i
                  adekvatna oralna higijena predstavljaju prevenciju ali i rano
                  dijagnostikovanje ove izlečive bolesti. Ako se ona otkrije na
                  vreme, odgovarajućom terapijom možemo sprečiti njeno
                  progresivno napredovanje.
                </p>
              </div>
              <div className="img-container">
                <img src="/services/parodontologija.jpeg" alt="Parodontologija" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
