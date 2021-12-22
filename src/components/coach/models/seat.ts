import { SeatState } from "./seat-state";
import { User } from "./user";

export type Seat = {
    index?: number;
    state: SeatState;
    user?: User;
}