import { PrimeIcons } from 'primereact/api';
import React from 'react';
import 'primeicons/primeicons.css';
import logo from "../assets/logo.jpeg";






export default function Footer() {

    return (
        <div>
            <footer className=" bg-gray-900 text-white text-center py-5">
                <div className="flex items-center  justify-center mb-4 ">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="h-9 w-12 object-contain"
                                />
                            </div>
                <div>
                    <h6 className="font-bold text-3xl pb-3">Morning Footballers</h6>

                    <div className="flex justify-center items-center gap-6 mt-2 mb-4">
                        <a href="https://www.facebook.com/">
                            <i className="pi pi-facebook text-3xl hover:scale-125 transition-transform duration-300"></i>
                        </a>

                        <a href="https://www.instagram.com/">
                            <i className="pi pi-instagram text-3xl hover:scale-125 transition-transform duration-300"></i>
                        </a>

                        <a href="https://x.com/">
                            <i className="pi pi-twitter text-3xl hover:scale-125 transition-transform duration-300"></i>
                        </a>

                        <a href="https://wa.link/6qyvbt">
                            <i className="pi pi-whatsapp text-3xl hover:scale-125 transition-transform duration-300"></i>
                        </a>
                    </div>
                </div>

                <p className="text-gray-300 mt-2 text-sm">
                    &copy; 2025 Football Tournament by Morning Footballers.<b>All rights reserved.</b>
                </p>
                
            </footer>
            <div className=' bg-gray-800 text-zinc-300 text-center'>
                    <p className='text-sm'>Design by oneO8.tech</p>
                </div>
        </div>


    );
}