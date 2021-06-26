import React, { useState, useEffect, useRef } from "react";
import Slider from "./Slider";
import "./SliderBody.css";
import personalData from "./../../services/personData";

const SliderBody = () => {
  const [persons] = useState(personalData());
  const [person, setPerson] = useState(null);
  const [counter, setCounter] = useState(0);
  let counterTimer = useRef();
  useEffect(() => {
    setPerson(persons[0]);
  }, [persons]);

  useEffect(() => {
    persons.length > 0 && setPerson(persons[counter]);
  }, [counter, persons]);

  useEffect(() => {
    if (counter === persons.length - 1) {
      setCounter(0);
    }
    clearTimeout(counterTimer.current);

    counterTimer.current = setTimeout(() => {
      setCounter((c) => c + 1);
    }, 2000);
  }, [counter, persons.length]);

  const nextPerson = () => {
    if (counter === persons.length - 1) {
      setCounter(0);
    } else {
      setCounter((c) => c + 1);
    }
    let person = persons[counter];
    setPerson(person);
  };

  const previousPerson = () => {
    if (counter === 0) {
      setCounter(persons.length - 1);
    } else {
      setCounter((c) => c - 1);
    }
    let person = persons[counter];
    setPerson(person);
  };
  return (
    <div className="container w-50 d-flex flex-column align-items-center  ">
      <h1 className="mb-5 text-primary">Reviews</h1>
      <div className="SliderBody d-flex align-items-center justify-content-between w-100 ">
        <button onClick={previousPerson}> {"<"}</button>
        {person && <Slider person={person} />}
        <button onClick={nextPerson}> {">"}</button>
      </div>
    </div>
  );
};

export default SliderBody;
