import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

app.post("/send-to-zapier", async (req, res) => {
  try {
    // Simulated incoming data (or use req.body from a form)

    const data = req.body;

    // Your Zapier webhook URL (from your custom app)
    const zapierWebhookUrl =
      "https://hooks.zapier.com/hooks/catch/25112039/u8d3ild";

    // Send data to Zapier
    const response = await axios.post(zapierWebhookUrl, data, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("✅ Data sent to Zapier:", response.status);
    res.json({ success: true, message: "Data sent to Zapier" });
  } catch (error) {
    console.error("❌ Error sending data:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => console.log("🚀 Express app running on port 3000"));
