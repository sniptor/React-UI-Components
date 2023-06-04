import React, { useEffect, useRef, useState } from 'react'
import styles from "./FlamingoRadio1.module.css";
import { ReactComponent as SearchLogo } from "./assets/search.svg";


function FlamingoRadio1() {
  const [inputStr, setInputStr] = useState("");

  return (
    <div className={styles.InputContainer}>
      <input
        type="radio"
        className={styles.InputBox}
        name="check1"
        value="check1"
      />
      <span className={styles.checkmark}></span>
      <label className={styles.CheckBoxLabel} for="check1">
        Label
      </label>
      <br />
    </div>
  );
}

export default FlamingoRadio1;