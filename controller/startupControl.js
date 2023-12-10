import { startupService } from "../service/startupService.js";

let addStartup = async (req, res) => {
  try {
    const addstartup = await startupService.addStartup(req.body);
    let data = {
      success: true,
      status: 200,
      addstartup,
    };
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

let getStartup = async (req, res) => {
  try {
    const getstartup = await startupService.getStartup();
    let data = {
      success: true,
      status: 200,
      getstartup,
    };
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

let searchTerm = async (req, res) => {
  try {
    let search = req.query.searchTerm;
    const searchData = await startupService.searchTerm(search);
    let data = {
      success: true,
      status: 200,
      searchData,
    };
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const startupController = {
  addStartup,
  getStartup,
  searchTerm,
};
