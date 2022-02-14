import React, { useState } from "react";
import styles from "../styles/CustomInput.module.css";
const CustomInput = ({ countries }) => {
  const [countriesList, setCountries] = useState(countries);
  const [text, setText] = useState("Select Country");
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    var temp = [];
    countries.map((ele) => {
      if (
        ele.name.common.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
      ) {
        temp.push(ele);
      }
    });
    setCountries(temp);
  };

  return (
    <div>
      {show && (
        <div className={styles.searchWrapper}>
          <input
            autoFocus
            onChange={(e) => handleChange(e)}
            className={styles.search}
            type="text"
          />
          <div className={styles.list}>
            {countriesList.map((ele, i) => {
              return (
                <p
                  onClick={() => setText(ele.name.common)}
                  key={i}
                  className={styles.item}
                >
                  <span>{ele.name.common}</span>
                </p>
              );
            })}
          </div>
        </div>
      )}
      <div onClick={() => setShow(!show)} className={styles.selectInput}>
        <p>{text}</p>
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          focusable="false"
          aria-hidden="true"
        >
          <path d="M4 5h8l-4 6-4-6z"></path>
        </svg>
      </div>
      <input
        type="tel"
        className={styles.customInput}
        maxLength="10"
        defaultValue="0123456"
      />
    </div>
  );
};

export default CustomInput;
