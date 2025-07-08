import React from 'react';
import { Video } from "lucide-react";
import Link from "next/link";


const DashNotLogged = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-md m-3 flex flex-col lg:flex-row justify-start items-center">
        {/* IMAGE SECTION — shown on right for lg screens, bottom for small */}
        <div className="w-full lg:w-1/2 order-2 lg:order-2 mt-5 lg:mt-0">
        <img
            className="w-full rounded-md"
            src="https://fowlerstudios.net/wp-content/uploads/2023/04/Hampton-Roads-Extended-Large-Photographer-Fort-Monroe-Best-Classic-Style_0002.jpg"
            alt="Hero Image"
            loading="lazy"
        />
        </div>

        {/* TEXT SECTION */}
        <div className="flex flex-col px-6 py-6 lg:px-16 lg:py-8 gap-1 w-full lg:w-1/2 order-1">
        <div className="flex items-center gap-2 P-2">
            <Video className="text-xl text-[#8B5CF6] font-bold w-6 h-6" />
            <h1 className="text-xl text-[#8B5CF6] font-bold">Meets</h1>
        </div>
        <div className="flex flex-col flex-wrap justify-start">
            <h1 className="text-3xl lg:text-5xl text-white font-bold mt-3">
            Video calls with anyone, anywhere
            </h1>
            <p className="text-sm lg:text-lg text-gray-400 mt-2">
            Join or create video calls with ease. No downloads, no hassle.
            </p>
            <p className="text-sm lg:text-lg text-gray-400 mt-1">
            Connect with friends, family, or colleagues instantly.
            </p>

            <div className="flex gap-2 mt-5 flex-wrap">
            <Link
                className="bg-[#8B5CF6] p-2 rounded-md font-bold text-black hover:bg-amber-200 
                hover:-translate-y-0.5 transition-all duration-200
                hover:shadow-gray-500 hover:shadow-md"
                href="/login"
            >
                Login
            </Link>
            <Link
                className="bg-[#8B5CF6] p-2 rounded-md font-bold text-black hover:bg-amber-200 
                hover:-translate-y-0.5 ml-3 transition-all duration-200
                hover:shadow-gray-500 hover:shadow-md"
                href="/signup"
            >
                Signup
            </Link>
            </div>
        </div>
        </div>
    </div>
)}

export default DashNotLogged