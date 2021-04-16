import { useQuery } from "react-query";
import { getPhones } from "../services/phone";

export const useFetchPhones = () => {
  const { data: phones, ...rest } = useQuery(["fetch-phones"], getPhones);

  return { phones, ...rest };
};
