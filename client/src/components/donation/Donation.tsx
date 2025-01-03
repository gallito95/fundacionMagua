import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CreateOrderData, CreateOrderActions } from "@paypal/react-paypal-js";
import './Donation.scss';
import ReactSlider from 'react-slider';



const Donation: React.FC = () => {
  const [showPayPalButton, setShowPayPalButton] = useState<boolean>(false);
  const [donationAmount, setDonationAmount] = useState<string>('10');
  const donationAmountRef = useRef<string>(donationAmount);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // Update the ref whenever the donationAmount changes
  useEffect(() => {
    donationAmountRef.current = donationAmount;
  }, [donationAmount]);

  const handleDonateButtonClick = () => {
    setShowPayPalButton(true);
  };

  const handleClosePayPal = () => {
    setShowPayPalButton(false);
  };

  const createOrder = (data: { purchase_units: { amount: { value: string } }[] }, actions: { order: { create: Function } }) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: donationAmountRef.current, 
          },
        },
      ],
    });
};

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details) => {
      alert('Thank you for your donation!');
      // Weitere Aktionen, wie das Weiterleiten zu einer Dankeseite
    });
  };

  return (
    <section className='block_Donation' id="donation">
      <div className='donate_Section'>
        <div>
          <h2 className='donate_Heading'>Become a Member</h2>
          <h3 className='donate_Heading_Subline'>Make a Change...</h3>
        </div>

        {showPayPalButton ? (
          <div className='paypal_buttonSection'>
            <PayPalScriptProvider options={{ "client-id": "AajWPfFBybu7psc590FmvWbTr19YXnkv0H5MR1EBYY0EX2SPGRy9UIHfhl-DeR9U5obS7jIFeE_wIvnX" }}>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
              />
            </PayPalScriptProvider>
            <div>
              <label className='donation_Label'> Enter Donation Amount:</label>

              <div className='slider-container'>
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="thumb"
                  trackClassName="track"
                  min={5}
                  max={300}
                  value={parseInt(donationAmount, 10)}
                  onChange={(value: number) => setDonationAmount(value.toString())}
                  renderThumb={(props, state) => (
                    <div {...props} className="thumb">
                      {state.valueNow}$
                    </div>
                  )}
                />
                <div className="slider-labels">
                  <span>5$</span>
                  <span>300$</span>
                </div>
              </div>
            </div>
            <button className="close_Button" onClick={handleClosePayPal}>Close</button>
          </div>
        ) : (
          <button className='donate_Button' onClick={handleDonateButtonClick}>Donate Now</button>
        )}
      </div>
    </section>
  );
};

export default Donation;
