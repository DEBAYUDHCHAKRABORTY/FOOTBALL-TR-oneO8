import React from "react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between  bg-blue-200 px-4 py-3  relative">

            <div className="flex items-center">
                <img 
                    src={logo} 
                    alt="logo" 
                    className="h-9 w-12 object-contain" 
                />
            </div>

            <div className="">
                <h1 className="text-lg font-semibold">Morning Footballers Committee</h1>
            </div>

            <div className="flex items-center">
                <i className="pi pi-list text-xl cursor-pointer"></i>
            </div>

        </div>
    );
}
