import React, { createContext, useReducer } from "react";
import { Phone } from "../../domain/Phone";
import {
  PhoneAction,
  phoneReducer,
  PHONES_INITIAL_STATE,
} from "../reducers/phoneReducer";

export const PhoneContext = createContext<
  [Phone[], React.Dispatch<PhoneAction>]
>(null);

export const PhoneProvider = ({ children }) => {
  const [phones, dispatch] = useReducer(phoneReducer, PHONES_INITIAL_STATE);

  return (
    <PhoneContext.Provider value={[phones, dispatch]}>
      {children}
    </PhoneContext.Provider>
  );
};
