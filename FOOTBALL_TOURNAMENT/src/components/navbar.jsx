import React from 'react';
import 'primeicons/primeicons.css';
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    const end = (
        <div className="flex items-center gap-4">
            <i className="pi pi-list text-xl cursor-pointer"></i>
        </div>
    );

    return (
        <div className="card relative">
            <Menubar end={end} />

            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <span className="text-lg font-semibold">
                    Morning Footballers Committee
                </span>
            </div>
        </div>
    );
}
