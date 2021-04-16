import { Phone } from "../../domain/Phone";

export const addPhonesAction = (newPhones: Phone[]) => {
  return [...newPhones];
};

export const emptyPhonesAction = () => {
  return [];
};
