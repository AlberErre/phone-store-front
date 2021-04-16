import { Phone } from "../../domain/Phone";
import { addPhonesAction, emptyPhonesAction } from "../actions/phoneActions";

export const PHONES_INITIAL_STATE: Phone[] = [];

export type PhoneAction =
  | { type: "ADD_PHONES"; phones: Phone[] }
  | { type: "EMPTY_PHONES" };

export const phoneReducer = (state: Phone[], action: PhoneAction): Phone[] => {
  switch (action.type) {
    case "ADD_PHONES":
      return addPhonesAction(action.phones);
    case "EMPTY_PHONES":
      return emptyPhonesAction();
    default:
      return state;
  }
};
