// routes/syncUser.js
import express from "express";
import verifyClerkToken from "../middleware/verifyToken.js";
import syncClerkUser from "../utils/syncClerkUser.js";

const router = express.Router();

router.post("/syncUser", verifyClerkToken, async (req, res) => {
  try {
    const { clerkId } = req.user;
    const user = await syncClerkUser(clerkId);
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error syncing user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
