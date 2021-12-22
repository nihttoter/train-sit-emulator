import { Coach } from "../models/coach";

export const setIndexes = (coach: Coach) => {
  const coachCopy = JSON.parse(JSON.stringify(coach)) as Coach;
  coachCopy.compartments
    .reduce((prev, current) => [...prev, ...current], [])
    .forEach((value, index) => (value.index = index + 1));
  return coachCopy;
};
