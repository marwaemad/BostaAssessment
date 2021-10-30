import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import styles from './progressBar.module.scss'
import { BiCheck } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';
import { BsBagCheckFill } from 'react-icons/bs';
const Colors = {
  red: 'red',
  orange: 'orange',
  green: 'green'
}

const steps = [
  {
    status: "TICKET_CREATED",
    icon: <BiCheck />,

  },
  {
    status: "PACKAGE_RECEIVED",
    icon: <BiCheck />
  },
  {
    status: "OUT_FOR_DELIVERY",
    icon: <FaShippingFast />,
    reason: 'تأجيل - العميل طلب التاجيل ليوم اخر'
  },
  {
    status: "DELIVERED",
    icon: <BsBagCheckFill />
  },
];
const ProgressBarComponent = ({ status = 'cancelled' }) => {
  const progressBarColor = status === 'cancelled' ? Colors.red : Colors.green;
  console.log(progressBarColor)
  const transfer = {
    status: "PACKAGE_RECEIVED" // change transfer status to progress bar
  };

  const getStepPosition = (transferStatus) => {

    return steps.findIndex(({ status }) => status === transferStatus);
  };
  return (
    <>
      <div style={{ margin: 50 }}>
        <ProgressBar

          width={'100%'}
          percent={
            getStepPosition(transfer.status) * 33.33
          }
          filledBackground={` ${progressBarColor}`}
        >
          {steps.map((step, index, arr) => {
            return (
              <Step
                key={index}
                position={100 * (index / arr.length)}
                transition="scale"
                children={({ accomplished }) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      width: accomplished ? 20 : 50,
                      height: accomplished ? 20 : 50,
                      color: "white",
                      backgroundColor: accomplished || transfer.status === step.status ? progressBarColor : "gray"
                    }}
                  >
                    {accomplished ? <BiCheck className={styles.progressBar_icon} /> : step.icon}
                    <label className={accomplished ? styles.progressBar_accomplished__label : styles.progressBar_label}>{step.status}</label>
                    {step.reason && <span className={styles.progressBar_accomplished__reason} style={{ color: `${progressBarColor}` }}>{step.reason}</span>}
                  </div>
                )}
              />
            );
          })}
        </ProgressBar>
      </div>
    </>
  );
}
export default ProgressBarComponent