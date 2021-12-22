import React from "react";
import { SeatState } from "../../models/seat-state";
import "./seat.component.scss";

export interface SeatProps {
  state?: SeatState;
  index?: number;
}

export const SeatComponent = (props: SeatProps) => {
  const { state, index } = props;

  return (
    <div className={"seat"}>
      <div className={"seat-item"}>
        {state} <br /> {index}
      </div>
    </div>
  );
};
