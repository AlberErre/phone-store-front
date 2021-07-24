import React, { createContext, useContext, useState } from "react";
import { Phone } from "../domain/Phone";

export const PhoneContext =
  createContext<[Phone[], React.Dispatch<React.SetStateAction<Phone[]>>]>(null);

export const PhoneProvider = ({ children }) => {
  const [phones, setPhones] = useState<Phone[]>([]);

  return (
    <PhoneContext.Provider value={[phones, setPhones]}>
      {children}
    </PhoneContext.Provider>
  );
};

export const usePhoneContext = () => {
  const context = useContext(PhoneContext);

  if (!context) {
    throw new Error(
      "Phone context not found, it must be used inside PhoneProvider"
    );
  }

  return context;
};
