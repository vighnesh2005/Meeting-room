"use client";
import React, { useEffect, useState } from "react";
import { Video } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { clearUser } from "@/lib/slices/userSlice";
import { useDispatch } from "react-redux";
import { useClerk } from "@clerk/nextjs";


const Navbar = () => {
    const clerk = useClerk();
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        const updateTime = () => {
            
        const now = new Date();

        const time = now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        // Date: e.g. "Tuesday, 08 Jul 2025"
        const date = now.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "2-digit",
            month: "short",
            year: "numeric",
        });

        setCurrentTime(time);
        setCurrentDate(date);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="flex items-center justify-between p-2 bg-black text-[#8B5CF6] top-0 z-50 w-full sticky">
        {/* Logo */}
        <Link className="flex items-center px-2" href="/">
            <Video />
            <h1 className="font-bold px-2 text-[#8B5CF6] text-xl">Meets</h1>
        </Link>

        {/* Signed out navbar */}
        <SignedOut>
            <div className="flex items-center">
            <Link href="/login">
                <h1 className="bg-[#8B5CF6] p-2 rounded-md font-bold text-black hover:bg-amber-200 hover:-translate-y-0.5 hover:shadow-gray-500 hover:shadow-md ml-3 transition-all duration-200">
                Login
                </h1>
            </Link>
            <Link href="/signup">
                <h1 className="bg-[#8B5CF6] p-2 rounded-md font-bold text-black hover:bg-amber-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-gray-500 ml-3 transition-all duration-200">
                Signup
                </h1>
            </Link>
            </div>
        </SignedOut>

        {/* Signed in navbar */}
        <SignedIn>
            {/* Time always shown */}
            <div className="text-white font-mono text-lg text-right flex">
                <div>{currentTime}</div>
                {/* Date only on md and above */}
                <div className="hidden md:block text-lg mx-2 text-white">
                ,{currentDate}
                </div>
            </div>

            {/* Optional Avatar */}
            <div className="flex items-center gap-2 px-2 text-white">
            {user.firstName}
            <DropdownMenu >
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src={user?.image || ""} />
                        <AvatarFallback
                        style={{ backgroundColor: user.color }}
                        className={`text-white`}>
                            {user?.firstName ? user.firstName.charAt(0).toUpperCase() : "?"}
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-gray-950 text-white">
                    <DropdownMenuItem asChild>
                        <Link href="/profile" className="w-full">
                            Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild   >
                        <Link href="/settings" className="w-full">
                            Settings
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem>
                        <button onClick={() => {
                            dispatch(clearUser());
                            console.log("User cleared from Redux store");
                            clerk.signOut();
                        }}>
                            <div className="flex items-center w-full">
                                <LogOut className="w-4 h-4 mr-2" />
                                <h1>Logout</h1>
                            </div>
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>

            </DropdownMenu>
            
            </div>
        </SignedIn>
        </nav>
    );
};

export default Navbar;
