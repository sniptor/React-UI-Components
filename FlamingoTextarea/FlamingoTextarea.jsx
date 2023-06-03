import React, { useState } from 'react'
import styles from "./FlamingoTextarea.module.css";


function FlamingoTextarea() {
  const [inputStr, setInputStr] = useState("");

  return (
    <div className={styles.InputContainer}>
      <textarea
        className={styles.TextAreaBox}
        onChange={(e) => setInputStr(e.target.value)}
        placeholder="Enter your text..."
        rows={6}
      ></textarea>
    </div>
  );
}

export default FlamingoTextarea;