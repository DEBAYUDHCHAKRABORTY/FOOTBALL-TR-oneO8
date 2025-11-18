import React from 'react';
import 'primeicons/primeicons.css';
import { Menubar } from 'primereact/menubar';
import logo from "../assets/logo.jpeg";


export default function Navbar() {
    const start = (
       <div className="flex items-center">
            <img 
                src={logo} 
                alt="" 
                className="h-9 w-12 object-contain" 
            />
        </div>
    );
    const end = (
        <div className="flex items-center gap-4">
            <i className="pi pi-list text-xl cursor-pointer"></i>
        </div>
    );

    return (
        <div className="card relative">
            <Menubar end={end} start={start}/>

            <div className="absolute inset-0 flex justify-center items-center">
                <span className="text-lg font-semibold">
                    Morning Footballers Committee
                </span>
            </div>
        </div>
    );
}
