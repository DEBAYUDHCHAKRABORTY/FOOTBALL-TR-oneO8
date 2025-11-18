import { PrimeIcons } from 'primereact/api';
import React from 'react';
import 'primeicons/primeicons.css';
import secretary from '../assets/secretary.png';
import president from '../assets/president.png';




export default function Footer() {

    return (
        <div>
            <footer className="footer" style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa' }}>
                <hr />


                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6 p-4">
                        <div className="text-3xl font-bold text-center md:text-left">
                            Organisers
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex flex-col items-center bg-white p-3 rounded-2xl shadow-sm">
                                <img src={president} alt="President of The Tournament" className="w-40 h-auto rounded-xl" />
                                <p className="mt-2 text-sm font-medium text-center">President - Mr. Swadesh Chowdhury</p>
                            </div>

                            <div className="flex flex-col items-center bg-white p-3 rounded-2xl shadow-sm">
                                <img src={secretary} alt="Secretary of The Tournament" className="w-36 h-auto rounded-xl" />
                                <p className="mt-2 text-sm font-medium text-center">Secretary - Mr. Mihir Mandal</p>
                            </div>
                        </div>
                    </div>



                <div className=" text-4xl pb-1">
                    <h3 className='font-bold mb-2.5'>About Us</h3>
                    <p className='font-extralight text-xl m-2'>⚽ <b><u>Our Story</u></b>: From Hospital Field to Football Hub
                        Our journey began on a humble three-quarters section of the Mathurapur Hospital Field. What started as a small seed of a dream, planted by a few passionate local players with minimal resources, has grown into a vibrant football initiative. Beyond just playing the game, our mission was to elevate football to a central sport in our region. From organizing local tournaments to nurturing young talents through focused training, every step has been driven by the spirit of teamwork and a deep love for the game. Today, our endeavor, which began on that limited patch of ground, stands as a testament to how community effort can transform the local football landscape.</p>
                </div>
                <div className="social meria m-auto">
                    <div className="pt-2 font-bold text-4xl pb-3">
                        Contact Us
                    </div>

                    <div className=' ml-30 mt-2 mb-3 space-between flex justify-items-center gap-3 pl-168'>
                        <a href="https://www.facebook.com/"><i className='pi pi-facebook hover:scale-140 transition-transform duration-500' style={{ fontSize: '1.7rem' }}></i></a>
                        <a href="https://www.instagram.com/"> <i className='pi pi-instagram hover:scale-140 transition-transform duration-500' style={{ fontSize: '1.7rem' }}></i></a>
                        <a href="https://x.com/"> <i className='pi pi-twitter hover:scale-140 transition-transform duration-500' 
                        style={{ fontSize: '1.7rem' }}></i></a>
                        <a href="https://wa.link/6qyvbt"> <i className='pi pi-whatsapp hover:scale-140 transition-transform duration-500' style={{ fontSize: '1.7rem' }}></i></a>
                    </div>
                </div>
                <div>
                    <p className='mb-4'>&copy;2025 Football Tournament by Morning Footballers. <b>All rights reserved.</b></p>
                </div>
            </footer>
        </div>

    );
}