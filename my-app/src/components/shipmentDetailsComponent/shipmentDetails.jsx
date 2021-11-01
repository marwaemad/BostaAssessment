import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './shipmentDetails.module.scss'
const ShipmentDetails = ({ shipmentData }) => {
    const [trackingData, setTrackingData] = useState();
    useEffect(() => {
        setTrackingData(shipmentData.TransitEvents)
    }, shipmentData.TransitEvents)
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

                    {trackingData && trackingData.map((item, index) => {
                        return (

                            <div className={styles.trackingContent} key={index}>
                                <ul>
                                    <li>{item.hub ? item.hub : ''}</li>
                                    <li>{item?.timestamp}</li>
                                    <li>{item?.timestamp}</li>
                                    <li>{item?.state}</li>
                                </ul>
                            </div>
                        )
                    })
                    }


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
                <img className={styles.help_img} alt={'logo'} src={require('./../../shared/assets/help.svg').default} />
            </div>
        </div>
    </div >)
}
const mapDispatchToProps = (state) => {
    const { shipmentData } = state;
    return shipmentData;
}
export default ShipmentDetails;