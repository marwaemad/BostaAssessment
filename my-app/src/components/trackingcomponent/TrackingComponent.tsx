import React from 'react';
import ProgressBarComponent from '../../shared/components/progressBar/progressbarComponent';
import styles from './tracking.module.scss'
const TrackingComponent = () => {
    return (
        <div className={styles.trackingContainer}>
            <div className={styles.trackingDetails}>
                <div className={styles.trackingDetails_shipment}>
                    <ul className={styles.trackingDetails_shipment__data}>
                        <li>
                            <label className={styles.label}>shipment No.</label>
                            <span className={styles.status}>not delivered</span>
                        </li>
                        <li>
                            <label className={styles.label}>last update</label>
                            <span className={styles.status}>{new Date().toDateString()}</span>
                        </li>
                        <li>
                            <label className={styles.label}>seller Name</label>
                            <span className={styles.status}>marwa</span>
                        </li>
                        <li>
                            <label className={styles.label}>delivered date</label>
                            <span className={styles.status}>{new Date().toDateString()}</span>
                        </li>

                    </ul>
                </div>
                <div className={styles.trackingProgressBar}>

                    <ProgressBarComponent />
                </div>

            </div>
        </div>);
}
export default TrackingComponent