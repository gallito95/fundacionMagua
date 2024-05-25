import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './donation.css';

const Donation = () => {
  const [showPayPalButton, setShowPayPalButton] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  const handleDonateButtonClick = () => {
    setShowPayPalButton(true);
  };

  const handleClosePayPal = () => {
    setShowPayPalButton(false);
  };


  return (
    <section className="block--dark2" id="donation">
      <div className='donate_Section'>
        <div>
          <h2 className='donate_Heading'>Become a Member</h2>
          <h3 className='donate_Heading_Subline'>Make a Change...</h3>
        </div>
        {showPayPalButton ? (
          <div className='paypal_Button'>
          <PayPalScriptProvider options={{ "client-id": "AajWPfFBybu7psc590FmvWbTr19YXnkv0H5MR1EBYY0EX2SPGRy9UIHfhl-DeR9U5obS7jIFeE_wIvnX" }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: '10.00' // Default amount
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(function (details) {
                  alert('Thank you for your donation!');
                  // Further actions like redirecting user to a thank you page
                });
              }}
            />
          </PayPalScriptProvider>
          <button className="close-button" onClick={handleClosePayPal}>Close</button>
          </div>
        ) : (
          <button className='donate_Button' onClick={handleDonateButtonClick}>Donate Now</button>
        )}
      </div>
    </section>
  );
};

export default Donation;