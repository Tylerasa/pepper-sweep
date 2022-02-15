import { Cheerio } from "cheerio";
import React, { useState } from "react";
import styles from "../styles/CustomInput.module.css";
import cheerio from "cheerio";
const CustomInput = ({ countries }) => {
  const [countriesList, setCountries] = useState(countries);
  const [text, setText] = useState("Select Country");
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
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

  const handleName = (ele) => {
    setShow(false);
    var cc = ele.idd.root + ele.idd.suffixes.toString();
    setCode(cc);
    var strText = ele.name.common + " " + "(" + cc + ")";
    setText(strText);
  };

  const sendRequest = async () => {
    // fetch(`https://wa.me/${code + phoneNumber}`, {
    //   mode: "no-cors" // 'cors' by default
    // })

    fetch(`https://wa.me/233554251651`, {
      mode: "no-cors" // 'cors' by default
    })
      .then((response) => console.log("res", response.text()))
      .then((data) => {
        console.log("data",data)
        // const $ = cheerio.load(data);
        // console.log($(".);
      });
  };
  const handleSubmit = () => {
    console.log(code + phoneNumber);
    sendRequest();
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
                  onClick={() => handleName(ele)}
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
        onChange={(e) => setPhoneNumber(e.target.value)}
        className={styles.customInput}
        maxLength="10"
        defaultValue="0123456"
      />
      <div onClick={handleSubmit} className={styles.button}>
        Submit
      </div>
    </div>
  );
};

export default CustomInput;
