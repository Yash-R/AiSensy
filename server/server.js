const express = require("express");
const app = express();
const dialogflow = require("@google-cloud/dialogflow");
const projectID = "aisensy-jeik";
const intentClient = new dialogflow.IntentsClient();

app.use("/", async (req, res) => {
  // Set Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    // initated projectAgentPath
    const projectAgentPath = intentClient.projectAgentPath(projectID);
    const request = {
      parent: projectAgentPath,
    };
    const [response] = await intentClient.listIntents(request);
    res.send(response);
  } catch (err) {
    res.sendStatus(429);
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Live !!");
});
