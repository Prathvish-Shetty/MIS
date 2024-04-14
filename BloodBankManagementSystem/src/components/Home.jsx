import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assets/main.png'
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                             Join the LifeLine 
                            <span className="hidden sm:block text-4xl">One Donation,Countless Miracles</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-red-600 rounded-lg hover:opacity-75"
                            to="/form"
                        >
                         Donate or Recieve now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src={img1} alt="image1" />
                </div>
            </aside>

            <div>
                <h1 className="text-center text-xl sm:text-5xl py-8 font-medium text-red-700">Why Blood Donation Matters ?</h1>
                <p className="mt-6 mx-16 text-black-600 text-lg">
                Every drop counts. Blood donation is more than just an act of kindness;
                it's a lifeline for those in need. By donating blood, you're contributing to the health and well-being of your community in a profound way. Your generosity can save lives during emergencies, surgeries, and for patients battling chronic illnesses. Join us in making a difference. Donate blood today and be a hero in someone's life.
                </p>
                <p className="mt-2 m-16 text-black-600 text-lg">
                Blood donation is crucial for saving lives in emergencies, surgeries, and for patients with chronic illnesses. Every donation is a lifeline, providing hope and healing to those in need. By giving blood, you're directly impacting the well-being of your community. Your generosity can mean the difference between life and death for someone facing a medical crisis. Join us in making a difference. Be a hero. Donate blood today and help ensure a healthier, brighter tomorrow for all.
                </p>  
            </div>     

            
        </div>
    );
}
