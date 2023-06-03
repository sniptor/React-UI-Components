import React, { useEffect, useRef, useState } from 'react'
import styles from "./FlamingoFileInput.module.css";
import { ReactComponent as File } from "./assets/file.svg";
import { ReactComponent as Check } from "./assets/Check.svg";


function FlamingoFileInput() {
  //states
  const [inputStr, setInputStr] = useState([0]);
  const [uploadStatus ,setUploadStatus] = useState(null)
  const [fileName, setFileName] = useState('');
  const [fileUploadText, setFileUploadText] = useState(
    "Click here to add a document"
  );
  const input = useRef(null);

  //actions
  const handleFileInput = () => {
    input.current.click()
    setUploadStatus(null)
  }

  useEffect(() => {
    console.log(inputStr)
    if (uploadStatus === "Uploading") {
      if (inputStr.length > 2)inputStr.splice(1,1)
      setUploadStatus("Uploading");
      setFileUploadText("Uploading...");
      setFileName(() => inputStr[inputStr.length-1][0].name);
      setTimeout(() => {
        setUploadStatus("Uploaded");
      }, 2500);
    }
    if (uploadStatus === "Uploaded") {
      setFileUploadText("Uploaded");
    }
  }, [uploadStatus,inputStr]);

  return (
    <div className={styles.InputContainer} onClick={() => handleFileInput()}>
      <input
        type="file"
        ref={input}
        className={styles.InputBox}
        onChange={(e) => {
          setInputStr([...inputStr, e.target.files]);
          setUploadStatus("Uploading");
        }}
      />
      <div className={styles.HoverDiv}></div>
      {uploadStatus === "Uploading" ? <div className={styles.loader}></div> : null}
      {uploadStatus === "Uploaded" ? (
        <Check className={styles.FileIcon} />
      ) : null}
      {uploadStatus === null ? <File className={styles.FileIcon} /> : null}

      <h4 className={styles.InputFileText}>{fileUploadText}</h4>
      <h4 className={styles.FilenName}>{fileName}</h4>
    </div>
  );
}

export default FlamingoFileInput;