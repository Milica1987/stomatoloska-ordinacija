import PriceList from "@components/PriceList";

import "@styles/Pricing.scss";

const Pricing = () => {
  return (
    <div className="price-list-container">
      <h2>Cenovnik nasih usluga</h2>
      <PriceList />
    </div>
  );
};

export default Pricing;
