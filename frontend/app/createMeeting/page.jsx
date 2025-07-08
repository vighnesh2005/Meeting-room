"use client";
import React, { useRef, useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";

const CreateMeeting = () => {
  const [vidperm, setVidperm] = useState(true);  // Default to true
  const [audperm, setAudperm] = useState(true);  // Default to true
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: vidperm,
        audio: audperm,
      })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Media error:", err);
      });
  }, [vidperm, audperm]); // re-run if permissions change

  return (
    <>
      <Sidebar />
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Create Meeting</h1>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full max-w-xl rounded shadow-lg"
        />
      </div>
    </>
  );
};

export default CreateMeeting;
