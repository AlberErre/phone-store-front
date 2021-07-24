import { Phone } from "../domain/Phone";
import { apiClient } from "./api";

const api = apiClient();

export const getPhones = (): Promise<Phone[]> => {
  return api.get("/phones");
};
