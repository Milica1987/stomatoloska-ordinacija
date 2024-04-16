const PriceList = () => {
  const services = [
    { name: "Hollywood Smile", price: "150€ - 300€" },
    { name: "Popravka i lečenje zuba" },
    {
      name: "Lasersko lečenje parodontopatije (po vilici)",
      price: "€250",
    },
    {
      name: "Duboka kiretaža desni bez upotrebe lasera (po vilici)",
      price: "€100",
    },
    { name: "Gingivoterapija (po zubu)", price: "€20" },
    { name: "Uklanjanje kamenca i mekih naslaga", price: "€20" },
    { name: "Bela plomba jednopovršinska", price: "€20" },
    { name: "Bela plomba dvopovršinska", price: "€30" },
    { name: "Bela plomba tropovršinska", price: "€40" },
    { name: "Keramička plomba", price: "€200" },
    { name: "Lečenje kanala (vađenje živca)", price: "€100" },
    { name: "Kompozitne fasete (po zubu)", price: "€50" },
    { name: "Skidanje kamenca i poliranje", price: "50€ - 100€" },
    { name: "Izbeljivanje", price: "100€ - 200€" },
    { name: "Ortodoncija" },
    { name: "Mobilni aparat za decu", price: "€300" },
    {
      name: "Fiksna proteza (mini metalne bravice), cena po vilici",
      price: "€700",
    },
    { name: "Fiksna proteza (safirne bravice), cena po vilici", price: "€900" },
    {
      name: "Fiksna proteza samoligirajuća metalna, cena po vilici",
      price: "€1000",
    },
    {
      name: "Fiksna proteza samoligirajuća bela, cena po vilici",
      price: "€1200",
    },
    { name: "Parodontologija" },
    { name: "Obrada parodontalnog džepa po zubu", price: "€25" },
    { name: "Drenaža parodontalnog apscesa", price: "€20" },
    { name: "Smanjenje osetljivosti korenova zuba (po zubu)", price: "€15" },
    {
      name: "Gingivektomija i gingivoplastika (po zubu) laserom",
      price: "€15",
    },
  ];

  return (
    <div>
      <table className=".price-list-table">
        <thead>
          <tr>
            <th>Usluga</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
