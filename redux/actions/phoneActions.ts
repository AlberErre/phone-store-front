import { Phone } from "../../domain/Phone";

export const addPhonesAction = (state: Phone[], newPhones: Phone[]) => {
  //NOTE: we keep previous state phones in case we want to implement lazy loading in the future
  return [...state, ...newPhones];
};

export const emptyPhonesAction = () => {
  return [];
};
