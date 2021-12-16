import React from "react";
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
  return <div className="coach">{compartments}</div>;
};

export const coachMock: Coach = {
  compartments: [
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
    [
      {
        state: "Free",
      },
      {
        state: "Free",
      },
    ],
  ],
};
