import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Bonsai.css';

function Bonsai() {
  const pricingCheckboxRef = useRef();
  const [pricing, setPricing] = useState('monthly');

  const handlePricingChange = () => {
    if (pricingCheckboxRef.current) {
      setPricing(pricing === 'monthly' ? 'yearly' : 'monthly');
    }
  };

  return (
    <>
      <nav>
        <a href="/bonsai">
          <img
            src="http://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
            width="150"
            alt="Bonsai logo"
          />
        </a>
      </nav>
      <main>
        <p>Bonsai</p>
        <label className="switch">
          <input
            type="checkbox"
            id="pricingCheckbox"
            value="pricingValue"
            ref={pricingCheckboxRef}
            onChange={handlePricingChange}
          />
          <span className="slider" />
        </label>
        {pricing === 'monthly' && <p>Monthly</p>}
        {pricing === 'yearly' && <p>Yearly</p>}
      </main>
    </>
  );
}

export default Bonsai;
