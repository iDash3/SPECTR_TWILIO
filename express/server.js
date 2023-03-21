const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/whats", (req, res) => {
  const twiml = new MessagingResponse();

  switch (req.body.body) {
    case "hello":
      twiml.message;
      break;
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
