import React, { useRef, useState } from 'react'
import styles from "./FlamingoDateInput.module.css";
import { ReactComponent as CalendarLogo } from "./assets/calendar.svg";


function FlamingoDateInput() {
  const [inputStr, setInputStr] = useState("");
  const input = useRef(null);
  console.log(inputStr);

  return (
    <div className={styles.InputContainer}>
      <input
        type="date"
        ref={input}
        className={styles.InputBox}
        onChange={(e) => setInputStr(e.target.value)}
        placeholder="Enter your password"
      />
      <CalendarLogo
        className={styles.CalenderIcon}
      />
    </div>
  );
}

export default FlamingoDateInput;