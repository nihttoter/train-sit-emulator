import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./coach.component.scss";
import { Seat } from "./models/seat";
import { selectCoach } from "./store/coach.slice";

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

export const CoachComponent = () => {
  const dispatch = useAppDispatch();
  const { coach } = useAppSelector(selectCoach);

  const compartments = coach.compartments.map(mapCompartment);

  return <div className="coach">{compartments}</div>;
};
