import React from 'react';
import styles from './shipmentDetails.module.scss'
const ShipmentDetails = () => {
    return (<div className={styles.shipementDetails}>
        <div className={styles.shipementDetails__tracking}>
            <h2>shipment Details</h2>
            <div className={styles.shipementDetails__tracking_container}>
                <div className={styles.shipementDetails__tracking_header}>
                    <ul>
                        <li>brnach</li>
                        <li>date</li>
                        <li>time</li>
                        <li>details</li>
                    </ul>

                </div>
                <div className={styles.shipementDetails__tracking_body}>
                    <div className={styles.trackingContent}>

                        <ul>
                            <li>brach brach brach brach</li>
                            <li>date brach brach brach</li>
                            <li>time brach brach brach</li>
                            <li>details brach brach brach</li>
                        </ul>
                    </div>
                    <div className={styles.trackingContent}>

                        <ul>
                            <li>brach</li>
                            <li>date</li>
                            <li>time</li>
                            <li>details</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div className={styles.shipementDetails__address}>
            <h2>address</h2>
            <div className={styles.shipementDetails__address_container}>
                cairo , helwan , 149 street
            </div>
            <div className={styles.shipementDetails__address_report}>
                <div className={styles.help_center}>
                    <p className={styles.help_title}> is there is problem in your shipment</p>
                    <button className={styles.help_btn}>report your problem</button>
                </div>
                <img className={styles.help_img} src={require('./../../shared/assets/help.svg').default} />
            </div>
        </div>
    </div >)
}
export default ShipmentDetails