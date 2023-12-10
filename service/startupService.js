import { startup } from "../model/startup.js";

const addStartup = async (data) => {
  const result = await startup.create(data);
  return result;
};

const getStartup = async () => {
  const result = await startup.find({});
  return result;
};

const searchTerm = async (search) => {
  const result = await startup.find({
    $or: [
      { StartupName: search },
      { IndustryVertical: search },
      { SubVertical: search },
    ],
  });
  return result;
};

export const startupService = {
  addStartup,
  getStartup,
  searchTerm,
};
