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
                <div className="flex flex-column md:flex-row justify-content-between align-items-center gap-4 p-4 flex-wrap">
                    <div className='font-bold text-4xl ml-25'>
                        <h1>Organisers</h1>
                    </div>
                    <div className='' >
                        <img src={president} alt="Secretary of The Tournament" className='w-600, h-27 ml-24 mt-5' />
                        <p className='ml-15 text-l font-medium'>President - Mr. Swadesh Chowdhury </p>
                    </div>
                    <div>
                        <img src={secretary} alt="President of The Tournament" className='w-600, h-27 ml-24 mt-5' />
                        <p className='ml-18 text-l font-medium'>Secretary - Mr. Mihir Mandal </p>
                    </div>
                    </div>
                   <div className=" text-4xl pb-1">
                    <h3 className='font-bold mb-2.5'>About Us</h3>
                    <p className='font-extralight text-xl text-left'>⚽ <b><u>Our Story</u></b>: From Hospital Field to Football Hub
                        Our journey began on a humble three-quarters section of the Mathurapur Hospital Field. What started as a small seed of a dream, planted by a few passionate local players with minimal resources, has grown into a vibrant football initiative. Beyond just playing the game, our mission was to elevate football to a central sport in our region. From organizing local tournaments to nurturing young talents through focused training, every step has been driven by the spirit of teamwork and a deep love for the game. Today, our endeavor, which began on that limited patch of ground, stands as a testament to how community effort can transform the local football landscape.</p>
                </div>
                <div className="social meria m-auto">
                    <div className="pt-2 font-bold text-4xl pb-3">
                        Contact Us
                    </div>
                    <div className=' ml-30 mt-2 mb-3 space-between flex justify-content-center gap-4 '>
                        <i className='pi pi-facebook' style={{ fontSize: '1.7rem' }}></i>
                        <i className='pi pi-instagram' style={{ fontSize: '1.7rem' }}></i>
                        <i className='pi pi-twitter' style={{ fontSize: '1.7rem' }}></i>
                        <i className='pi pi-whatsapp' style={{ fontSize: '1.7rem' }}></i>
                    </div>
                </div>
                <div className=''>
                    <p className='mb-4'>&copy;2025 Football Tournament by Morning Footballers. <b>All rights reserved.</b></p>
                </div>
            </footer>
       </div>

    );
}