"use client";
import { useEffect } from "react";
import { SignOutButton } from "@clerk/nextjs";
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";
import { setUser } from "@/lib/slices/userSlice";

export default function Home() {
  const { getToken, isSignedIn, isLoaded } = useAuth(); // ✅ Added isLoaded
  const { user } = useUser();
  const URL = process.env.NEXT_PUBLIC_URL || "http://localhost:5000";

  useEffect(() => {
    const sync = async () => {
      if (!isLoaded) return;

      if (isSignedIn) {
        try {
          const token = await getToken();

          if(!token) return;
          const res = await axios.post(
            `${URL}/api/auth/syncUser`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          console.log("✅ Sync (header) response:", res.data.user);
          setUser(res.data.user);
          console.log("success");
          
        } catch (error) {
          console.error("❌ Sync failed:", error.response?.data || error);
        }
      } else {
        console.log("🔒 User is not signed in");
      }
    };

    sync();
  }, [isSignedIn, isLoaded, getToken]);

  return (
    <>
      <SignOutButton />
    </>
  );
}
