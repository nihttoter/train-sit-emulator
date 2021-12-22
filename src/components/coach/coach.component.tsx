import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./coach.component.scss";
import { SeatComponent } from "./components/seat/seat.component";
import { Seat } from "./models/seat";
import { selectCoach } from "./store/coach.slice";

export const mapCompartment = (compartment: Seat[]) => (
  <div className={"compartment"}>{compartment.map(mapSeat)}</div>
);

export const mapSeat = (seat: Seat) => (
  <SeatComponent key={seat.index} index={seat.index} state={seat.state} />
);

export const CoachComponent = () => {
  const dispatch = useAppDispatch();
  const { coach } = useAppSelector(selectCoach);

  const compartments = coach.compartments.map(mapCompartment);

  return <div className="coach">{compartments}</div>;
};
