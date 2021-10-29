import React, { useState } from "react";
import { BiSearch, BiChevronUp, BiChevronDown } from "react-icons/bi";
import styles from './header.module.scss';

const Header = () => {

  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [showTrackingPopup, setshowTrackingPopup] = useState<boolean>(false);
  const getTrackingNumber = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('hi')
  }
  return (
    <header className="App-header">
      <div className="row">
        <div className={styles.header_container}>
          <div className="logo">
            <img
              src={require('./../shared/assets/bosta_logo.svg').default}
              alt="logo"
            />
          </div>
          <div className={styles.nav_container}>
            <nav>
              <ul>
                <li>
                  <a href="./home">home</a>
                </li>
                <li>
                  <a href="./pricing">pricing</a>
                </li>
                <li>
                  <a href="./contact sales">contact sales</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={`${styles.nav_container} ${styles.right_nav}`}>
            <nav>
              <ul>
                <li onClick={() => setshowTrackingPopup(!showTrackingPopup)} className={styles.trackingShipment_link}>
                  <span>tracking shipment</span>
                  {showTrackingPopup ? <BiChevronUp className={styles.trackingShipment_icon} /> : <BiChevronDown className={styles.trackingShipment_icon} />}
                </li>
                <li>
                  <a href="./pricing">sign in</a>
                </li>
                <li>
                  <a href="./contact sales">عربى</a>
                </li>
              </ul>
            </nav>
          </div>
          {showTrackingPopup && <div className={styles.trackingShipment_popup}>

            <form onSubmit={getTrackingNumber} className={styles.trackingPopup}>
              <h2 className={styles.trackingPopup_head_pop}>Track your shipment</h2>
              <p className={styles.trackingPopup_lable_pop}>Enter your tracking No.</p>
              <input value={trackingNumber} placeholder='Tracking No.' onChange={(e) => setTrackingNumber(e.target.value)} className={styles.trackingPopup_input} />
              <button type='submit' className={styles.trackingPopup_submitBtn} ><BiSearch className={styles.trackingPopup_submitBtn__icon} /></button>
            </form>


          </div>}
        </div>
      </div>
    </header >
  );
}
export default Header;
