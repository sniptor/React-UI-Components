import React from 'react'
import styles from "./FlamingoInfoNotification.module.css";
import { ReactComponent as Info } from "./assets/info.svg";
import { ReactComponent as Cross } from "./assets/cross.svg";
import { useRef } from 'react';

function FlamingoInfoNotification({
  title = "Information",
  content = "Content",
}) {
  const notification = useRef(null);
  const handleNotificationClose = () => {
    notification.current.style.display = "none";
  };
  return (
    <div className={styles.NotificationContainer} ref={notification}>
      <div className={styles.NotificationIconContainer}>
        <Info className={styles.NotificationIcon} />
      </div>
      <div className={styles.NotificationContentContainer}>
        <h2 className={styles.NotificationContentText}>{title}</h2>
        <h4 className={styles.NotificationContentData}>{content}</h4>
      </div>
      <div className={styles.NotificationCloseIconContainer}>
        <Cross
          className={styles.CrossIcon}
          onClick={() => handleNotificationClose()}
        />
      </div>
    </div>
  );
}

export default FlamingoInfoNotification;