const express = require("express");
const app = express();
const dialogflow = require("@google-cloud/dialogflow");
const projectID = "aisensy-jeik";
const intentClient = new dialogflow.IntentsClient();

app.use("/", async (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.send("Server Started !!");
  try {
    const projectAgentPath = intentClient.projectAgentPath(projectID);
    const request = {
      parent: projectAgentPath,
    };
    const [response] = await intentClient.listIntents(request);
    res.send(response);
  } catch (err) {
    // console.log(err);
    res.sendStatus(429);
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Live !!");
});
