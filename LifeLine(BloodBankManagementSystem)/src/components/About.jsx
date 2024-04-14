import React from 'react'
import aboutimg from  '../assets/about.png';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={aboutimg}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Unveiling Lifeline: Our Mission, Vision, and Impact
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Welcome to Lifeline, where every drop of blood carries the promise of life. Founded on the belief that every individual deserves access to safe and sufficient blood, we are a dedicated team committed to bridging the gap between donors and recipients. Our mission is clear: to ensure that no life is lost due to a shortage of blood.
                        </p>
                        <p className="mt-4 text-gray-600">
                        At Lifeline, our vision is simple yet profound: a world where blood donation is not just a choice but a collective responsibility. We envision communities coming together, united by the common goal of saving lives through voluntary blood donation.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Our impact speaks volumes. Through our relentless efforts, we have touched countless lives, providing hope and healing to those in need. From emergency transfusions to life-saving surgeries, each donation leaves a lasting impression on both donors and recipients alike.
                            Join us on this journey of compassion and solidarity. Together, let's unveil Lifeline and make a difference, one drop at a time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}