import "@styles/Contact.scss";

import LocationIcon from "@assets/location.svg";
import PhoneIcon from "@assets/phone.svg";
import Mailicon from "@assets/email.svg";

const Contact = () => {
  return (
    <div className="contactMain">
      <h2>Kontakt</h2>
      <div className="contact">
        <div className="contact-info">
          <h3>Pozovite nas i zakažite Vaš pregled</h3>
          <div className="container1">
            <button>
              <img src={LocationIcon} alt="location" />
            </button>
            <p>Adresa: Nikolaja Gogolja 10</p>
          </div>
          <div className="container2">
            <button>
              <img src={PhoneIcon} alt="phone" />
            </button>
            <p>Telefon: 064/9559870</p>
          </div>
          <div className="container3">
            <button>
              <img src={Mailicon} alt="mail" />
            </button>
            <p>E-mail: hallosmile@gmail.com</p>
          </div>
          
          <p>Radno vreme: od 9-17h</p>
        </div>
        <div className="map-info">
          <h3>Mapa sa lokacijom</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.974451108553!2d20.4156609!3d44.781326199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6fd1d42206dd%3A0xc3d8552fbe84b393!2sNikolaja%20Gogolja%2010%2C%20Beograd!5e0!3m2!1sen!2srs!4v1712229445660!5m2!1sen!2srs"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
