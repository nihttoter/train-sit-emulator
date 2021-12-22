import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { decrement, increment } from "../counter/store/counter.slice";
import { coachMock } from "./coach.mock";
import "./field.component.scss";
import { Coach } from "./models/coach";
import { Seat } from "./models/seat";

export const mapCompartment = (compartment: Seat[]) => (
  <div className={"compartment"}>{compartment.map(mapSeat)}</div>
);

export const mapSeat = (seat: Seat) => (
  <div className={"seat"}>
    <div className={"seat-item"}>
      {seat.state} <br /> {seat.index}
    </div>
  </div>
);

export const setIndexes = (coach: Coach) => {
  const coachCopy = JSON.parse(JSON.stringify(coach)) as Coach;
  coachCopy.compartments
    .reduce((prev, current) => [...prev, ...current], [])
    .forEach((value, index) => (value.index = index + 1));
  return coachCopy;
};

export const FieldComponent = () => {
  const indexedCoach = setIndexes(coachMock);
  const compartments = indexedCoach.compartments.map(mapCompartment);

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="coach">
      {compartments}
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
