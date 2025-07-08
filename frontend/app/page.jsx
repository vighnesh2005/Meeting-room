"use client";
import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import axios from "axios";
import { setUser } from "@/lib/slices/userSlice";
import { useDispatch } from "react-redux";
import DashLogged from "@/components/dashLogged";
import DashNotLogged from "@/components/dashNotLogged";
import Sidebar from "@/components/sidebar";


export default function Home() {
  const { getToken, isSignedIn, isLoaded } = useAuth();
  const URL = process.env.NEXT_PUBLIC_URL || "http://localhost:5000";
  const dispatch = useDispatch();


  useEffect(() => {
    const sync = async () => {
      if (!isLoaded) return;
      if (isSignedIn) {
        try {
          const token = await getToken();
          if (!token) return;
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
          dispatch(setUser(res.data.user));
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
      
      <SignedIn>
        <Sidebar></Sidebar>
        <DashLogged />
      </SignedIn>

      <SignedOut>
        <DashNotLogged />
      </SignedOut>
    </>
  );
}
