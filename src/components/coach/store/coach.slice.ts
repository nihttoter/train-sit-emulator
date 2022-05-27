import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/state";
import { coachMock } from "../../coach/coach.mock";
import { Coach } from "../../coach/models/coach";
import { Seat } from "../models/seat";
import { setIndexes } from "../utils/set-indexes";

// Define a type for the slice state
interface CoachState {
  coach: Coach;
}

// Define the initial state using that type
const initialState: CoachState = {
  coach: setIndexes(coachMock),
};

export const coachSlice = createSlice({
  name: "coach",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCoach: (state: CoachState, newCoach: PayloadAction<Coach>) => {
      state.coach = newCoach.payload;
    },
    selectSeat: (state: CoachState, seatIndex: PayloadAction<number>) => {
      const selectedSeat = state.coach.compartments
        .reduce((agg, current) => [...agg, ...current], [])
        .find((seat: Seat) => seat.index === seatIndex.payload);

      if (!selectedSeat) {
        return state;
      }

      selectedSeat.selected = !selectedSeat.selected;
      return state;
    },
  },
});

export const { setCoach, selectSeat } = coachSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCoach = (state: RootState) => state.coach;

export const selectSeats = (state: RootState) =>
  state.coach.coach.compartments.reduce(
    (agg, current) => [...agg, ...current],
    []
  );

export default coachSlice.reducer;
