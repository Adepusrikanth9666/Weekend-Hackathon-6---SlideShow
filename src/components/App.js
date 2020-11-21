import React, { Component, useState } from "react";
import "../styles/App.css";

let value = 0;
const App = (props) => {
  let length = props.slides.length;

  const [title, settitle] = useState(props.slides[value].title);

  const [text, settext] = useState(props.slides[value].text);
  const [isdisable1, setisdisable1] = useState(true);
  const [isdisable2, setisdisable2] = useState(false);

  const nextClick = () => {
    value += 1;
    if (value <= length) {
      if (value === length - 1) {
        setisdisable2(true);
      } else {
        setisdisable2(false);
        setisdisable1(false);
      }

     
      console.log("nextclick", value);
      settitle(props.slides[value].title);
      settext(props.slides[value].text);
    }
  };
  const prevClick = () => {
    value -= 1;
    if (value >= 1 && value <= length) {
      if (value === 1) {
        setisdisable1(true);
      } else {
        setisdisable1(false);
        setisdisable2(false);
      }

    
      console.log("preClick", value);
      settitle(props.slides[value].title);
      settext(props.slides[value].text);
    }
  };

  const restartClick = () => {
    console.log("resertClick", value);
    settitle(props.slides[0].title);
    settext(props.slides[0].text);
    setisdisable1(true);
    setisdisable2(false);
    value = 0;
  };

  return (
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>

      <button
        id="prev"
        data-testid="button-prev"
        disabled={isdisable1}
        onClick={prevClick}
      >
        Prev
      </button>

      <button
        id="next"
        data-testid="button-next"
        disabled={isdisable2}
        onClick={nextClick}
      >
        Next
      </button>

      <button
        id="resert"
        data-testid="button-restart"
        disabled={value === 0 ? true : false}
        onClick={restartClick}
      >
        Restart
      </button>
    </>
  );
};

export default App;
