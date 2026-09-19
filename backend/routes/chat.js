import express from "express";
import Thread from "../models/Thread.js";

const router = express.Router();

//test
router.post("/test", async (req, res) => {
  try {
    const thread = new Thread({
      threadId: "xyz123",
      title: "Testing new thread",
    });
    const response = await thread.save();
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "failed to save DB" });
  }
});

export default router;