import React from 'react'
import styles from "./FlamingoErrorNotification.module.css";
import { ReactComponent as Error } from "./assets/error.svg";
import { ReactComponent as Cross } from "./assets/cross.svg";
import { useRef } from 'react';

function FlamingoErrorNotification({
  title = "Error",
  content = "Content",
}) {
  const notification = useRef(null);
  const handleNotificationClose = () => {
    notification.current.style.display = "none";
  };
  return (
    <div className={styles.NotificationContainer} ref={notification}>
      <div className={styles.NotificationIconContainer}>
        <Error className={styles.NotificationIcon} />
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

export default FlamingoErrorNotification;