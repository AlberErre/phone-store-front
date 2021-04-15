import { Phone } from "../domain/Phone";
import { serviceProvider } from "./serviceProvider";

const service = serviceProvider();

export const getPhones = (): Promise<Phone[]> => {
  return service.get("/phones");
};
