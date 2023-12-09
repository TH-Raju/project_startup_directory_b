import { startup } from "../model/startup.js";

const addStartup = async (data) => {
  const result = startup.create(data);
  return result;
};

export const startupService = {
  addStartup,
};
