import React from 'react'
import styles from  './FlamingoBtn1.module.css'

function FlamingoBtn1({className,...props}) {
  return (
    <button className={`${styles.ButtonContainer} ${className}`} {...props} role="button">
      Label
    </button>
  );
}
;
export default FlamingoBtn1