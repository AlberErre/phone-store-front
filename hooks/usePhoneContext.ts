import { useContext } from "react";
import { PhoneContext } from "../context/PhoneContext";

export const usePhoneContext = () => {
  const context = useContext(PhoneContext);

  if (!context) {
    throw new Error(
      "Phone context not found, it must be used inside PhoneProvider"
    );
  }

  return context;
};
