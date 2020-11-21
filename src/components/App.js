import React, { Component, useState } from "react";
import "../styles/App.css";

let value = 0;
const App = (props) => {
  let length = props.slides.length;

  console.log(length);

  const [title, settitle] = useState(props.slides[value].title);

  const [text, settext] = useState(props.slides[value].text);

  const nextClick = () => {
    value += 1;

    if (value <= length || length === 1) {
      console.log("nextclick", value);
      settitle(props.slides[value].title);
      settext(props.slides[value].text);
    }
  };
  const prevClick = () => {
    value -= 1;
    if (value >= 0 && value <= length) {
      console.log("preClick", value);
      settitle(props.slides[value].title);
      settext(props.slides[value].text);
    }
  };

  const restartClick = () => {
    console.log("resertClick", value);
    settitle(props.slides[0].title);
    settext(props.slides[0].text);
    value = 0;
  };

  return (
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>

      <button
        id="prev"
        data-testid="button-prev"
        disabled={value === 0 ? true : false}
        onClick={prevClick}
      >
        Prev
      </button>

      <button
        id="next"
        data-testid="button-next"
        disabled={value === length - 1 ? true : false}
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
