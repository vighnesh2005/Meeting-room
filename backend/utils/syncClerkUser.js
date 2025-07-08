// utils/syncClerkUser.js
import { createClerkClient } from "@clerk/backend";
import User from "../models/user.model.js";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
  apiUrl: process.env.CLERK_API_URL || "https://api.clerk.dev",
});

export default async function syncClerkUser(clerkId) {
  const existingUser = await User.findOne({ clerkId });
  if (existingUser) return existingUser;

  const clerkUser = await clerkClient.users.getUser(clerkId);

  const email = clerkUser.emailAddresses[0]?.emailAddress || "";
  const firstName = clerkUser.firstName || "";
  const lastName = clerkUser.lastName || "";
  const provider = clerkUser.externalAccounts[0]?.provider || "email";
  const color = getRandomColor();

  const user = await User.create({
    clerkId,
    email,
    firstName,
    lastName,
    authProvider: provider,
    color,
  });

  return user;
}
 