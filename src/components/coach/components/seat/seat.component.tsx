import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { SeatState } from "../../models/seat-state";
import { selectCoach, selectSeat } from "../../store/coach.slice";
import "./seat.component.scss";

export interface SeatProps {
  state?: SeatState;
  index?: number;
  selected?: boolean;
}

export const SeatComponent = (props: SeatProps) => {
  const { state, index, selected } = props;
  const dispatch = useAppDispatch();
  const { coach } = useAppSelector(selectCoach);

  const onSeatClick = () => {
    if (index === undefined) {
      return;
    }
    dispatch(selectSeat(index));
  };

  return (
    <div
      className={`seat${selected ? " seat_selected" : ""}`}
      onClick={onSeatClick}
    >
      <div className={"seat__item"}>
        {state} <br /> {index}
      </div>
    </div>
  );
};
