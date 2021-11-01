import React, { useEffect } from 'react';
import ProgressBarComponent from '../../shared/components/progressBar/progressbarComponent';
import styles from './tracking.module.scss';
import { useState } from 'react';

const TrackingComponent = (props) => {
    const [trackingData, setTrackingData] = useState()
    useEffect(() => {
        setTrackingData(props.shipmentData)
    }, props.shipmentData)
    return (
        <div className={styles.trackingContainer}>
            <div className={styles.trackingDetails}>
                <div className={styles.trackingDetails_shipment}>
                    <ul className={styles.trackingDetails_shipment__data}>
                        <li>
                            <label className={styles.label}>{trackingData?.TrackingNumber}</label>
                            <span className={styles.status}>{trackingData?.CurrentStatus?.state}</span>
                        </li>
                        <li>
                            <label className={styles.label}>last update</label>
                            <span className={styles.status}>{trackingData?.CurrentStatus?.timestamp}</span>
                        </li>
                        <li>
                            <label className={styles.label}>seller Name</label>
                            <span className={styles.status}>bosta</span>
                        </li>
                        <li>
                            <label className={styles.label}>delivered date</label>
                            <span className={styles.status}>{trackingData?.CurrentStatus?.timestamp}</span>
                        </li>

                    </ul>
                </div>
                <div className={styles.trackingProgressBar}>

                    <ProgressBarComponent currentStatus={trackingData?.CurrentStatus?.state} trackingDataTransit={trackingData?.TransitEvents} />
                </div>

            </div>
        </div>);
}

export default TrackingComponent