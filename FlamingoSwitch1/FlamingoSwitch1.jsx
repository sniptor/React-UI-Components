import React, { useEffect, useRef, useState } from 'react'
import styles from "./FlamingoSwitch1.module.css";
import { ReactComponent as SearchLogo } from "./assets/search.svg";


function FlamingoSwitch1() {
  const [inputStr, setInputStr] = useState("");

  return (
    <div className={styles.InputContainer}>
      <input
        type="checkbox"
        className={styles.InputBox}
        name="check1"
        value="check1"
      />
      <span className={styles.checkmark}> </span>
      <span className={styles.checkmark1}> </span>
      <span className={styles.switchText}></span>
    </div>
  );
}

export default FlamingoSwitch1;