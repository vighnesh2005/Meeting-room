import { verifyToken } from "@clerk/backend";
import dotenv from "dotenv";
dotenv.config();

export default async function verifyClerkToken(req, res, next) {
  try {
    const token = req.headers.authorization?.split("Bearer ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    const payload = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    req.user = { clerkId: payload.sub }; // Clerk user ID
    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    res.status(401).json({ error: "Unauthorized" });
  }
}
