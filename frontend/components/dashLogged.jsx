"use client";
import { useEffect, useState } from "react";
import { Video } from "lucide-react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { UserPlus2 } from "lucide-react";
import { Calendar1 } from "lucide-react";


const DashLogged = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <>
    <div className="p-8 text-white rounded-md flex-wrap flex-col w-full">
          <div className="w-full image h-50 rounded-md p-3 flex flex-col justify-end">

            {/* ✅ Time and Date Display */}
            <div className=" bg-gray-500/60 p-2 rounded-md w-fit">
              <div className="text-black lg:text-5xl font-bold text-2xl">
                {dateTime.toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="text-black text-md md:text-xl text-md">
                {dateTime.toLocaleTimeString("en-IN")}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-start my-10 gap-6">
              <Link className="bg-orange-500 h-60 w-60 p-4 rounded-md flex flex-col
               justify-between hover:bg-orange-600" href="/createMeeting">
                <div className="p-2 bg-gray-200/60 rounded-md m-2 w-12">
                  <Plus className="w-8 h-8" />
                </div>
                <div className="p-2">
                  <h1 className="text-white text-2xl font-bold my-1">New Meeting</h1>
                  <p className="text-white text-sm">Create a new meeting</p>
                </div>
              </Link>
              <Link className="bg-blue-500 h-60 w-60 p-4 rounded-md flex flex-col
               justify-between hover:bg-blue-600" href="/joinMeeting">
                <div className="p-2 bg-gray-200/60 rounded-md m-2 w-12">
                  <UserPlus2 className="w-8 h-8" />
                </div>
                <div className="p-2">
                  <h1 className="text-white text-2xl font-bold my-1">Join Meeting</h1>
                  <p className="text-white text-sm">via invitation Link </p>
                </div>
              </Link>
              <Link className="bg-purple-500 h-60 w-60 p-4 rounded-md flex flex-col
               justify-between hover:bg-purple-600" href="/scheduleMeeting">
                <div className="p-2 bg-gray-200/60 rounded-md m-2 w-12">
                  <Calendar1 className="w-8 h-8" />
                </div>
                <div className="p-2">
                  <h1 className="text-white text-2xl font-bold my-1">Schedule a Meeting</h1>
                  <p className="text-white text-sm">Schedule a meeting in the future</p>
                </div>
              </Link>
              <Link className="bg-yellow-500 h-60 w-60 p-4 rounded-md flex flex-col
               justify-between hover:bg-yellow-600" href="/recordings">
                <div className="p-2 bg-gray-200/60 rounded-md m-2 w-12">
                  <Video className="w-8 h-8" />
                </div>
                <div className="p-2">
                  <h1 className="text-white text-2xl font-bold my-1">View Recordings</h1>
                  <p className="text-white text-sm">View your previous meetings</p>
                </div>
              </Link>
          </div>
        </div>
    </>
)
}

export default DashLogged