// Import necessary libraries
const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

// Initialize express app
const app = express();

// Parse incoming requests as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define endpoint for incoming messages from Twilio
app.post("/whatsapp", (req, res) => {
  const twiml = new twilio.twiml.MessagingResponse();
  const message = req.body.Body;
  const sender = req.body.From;

  // Process incoming message
  console.log(`Received message '${message}' from ${sender}`);

  // Create response message
  const response = `Thanks for your message! You said: ${message}`;

  // Send response message
  twiml.message(response);

  // Send TwiML response back to Twilio
  res.set("Content-Type", "text/xml");
  res.send(twiml.toString());
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
