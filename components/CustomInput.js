import React, { useState } from "react";
import styles from "../styles/CustomInput.module.css";
const CustomInput = ({ countries }) => {
  console.log(countries);

  const [countriesList, setCountries] = useState(countries);
  const handleChange = (e) => {
    setCountries(countries.filter(checkWord));
  };
  function checkWord(word) {
    return word.name.includes(e.target.value);
  }
  return (
    <div>
      <div className={styles.searchWrapper}>
        <input
          onChange={(e) => handleChange(e)}
          className={styles.search}
          type="text"
        />
        <div className={styles.list}>
          {countriesList.map((ele, i) => {
            return (
              <p key={i} className={styles.item}>
                <span>{ele.name.common}</span>
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.selectInput}>
        <p>Ghana</p>
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
