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





                <div className="flex flex-column md:flex-row justify-content-between align-items-center gap-4 p-4">

                    <div className='font-bold text-2xl'>

                        Organisers - Morning Footballers

                    </div>

                    <div>

                        <img src={president} alt="Secretary of The Tournament" className='w-300, h-17' />

                        <p>President - Mr. Swadesh Chowdhury </p>

                    </div>


                    <div>

                        <img src={secretary} alt="President of The Tournament" style={{ width: '100px', height: 'auto' }} />

                        <p>Secretary - Mr. Mihir Mandal </p>

                    </div>

                </div>





                <div className="font-bold text-2xl pb-1">

                    About Us

                </div>





                <div className="social meria m-auto">

                    <div className="pt-2 font-bold text-2xl pb-3">

                        Contact Us

                    </div>

                    <div className="pr-2">

                        <i className='pi pi-facebook' style={{ fontSize: '1.2rem' }}></i> Morning Footballers

                    </div>

                    <div>

                        <i className='pi pi-instagram' style={{ fontSize: '1.2rem' }}></i> @morningfootballers

                    </div>

                    <div>

                        <i className='pi pi-twitter' style={{ fontSize: '1.2rem' }}></i> @morningfooty

                    </div>



                    <div>

                        <i className='pi pi-whatsapp' style={{ fontSize: '1.2rem' }}></i> +91 8436186968

                    </div>

                </div>





                <div className=''>

                    <p>&copy; 2025 Mornging Footballers Football Tournament. All rights reserved.</p>

                </div>

            </footer>

        </div>

    );

}