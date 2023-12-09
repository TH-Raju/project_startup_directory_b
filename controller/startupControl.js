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

export const startupController = {
  addStartup,
};
