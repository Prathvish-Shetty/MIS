import React from 'react'
import { useState } from 'react'

function Form() {
    // State to manage the visibility of the dropdown
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div class="flex items-center justify-center p-12">
                <div class="mx-auto w-full max-w-[550px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="fName"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fName"
                                        id="fName"
                                        placeholder="First Name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="lName"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lName"
                                        id="lName"
                                        placeholder="Last Name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Address</label>
                                <input type="text" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Pune" required />
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                                <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>
                        </div>
                        <div class="mb-5">
                            <label
                                for="guest"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Enter your Blood Group :
                            </label>

                            {/* Dropdown Button */}
                            <button
                                id="dropdownDefaultButton"
                                onClick={toggleDropdown}
                                className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                type="button"
                            >
                                Blood Group{' '}
                                <svg
                                    className="w-2.5 h-2.5 ms-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Content */}
                            {isOpen && (
                                <div
                                    id="dropdown"
                                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                                >
                                    <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                                A+ve
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                                A-ve
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                                B+ve
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                B-ve
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                O+ve
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                O-ve
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                AB+ve
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                AB-ve
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="date"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="time"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="mb-5">
                            <label class="mb-3 block text-base font-medium text-[#07074D]">
                                Are you a Donor or Reciever ?
                            </label>
                            <div class="flex items-center space-x-6">
                                <div class="flex items-center">
                                    <input
                                        type="radio"
                                        name="radio1"
                                        id="radioButton1"
                                        class="h-5 w-5"
                                    />
                                    <label
                                        for="radioButton1"
                                        class="pl-3 text-base font-medium text-[#07074D]"
                                    >
                                        Donor
                                    </label>
                                </div>
                                <div class="flex items-center">
                                    <input
                                        type="radio"
                                        name="radio1"
                                        id="radioButton2"
                                        class="h-5 w-5"
                                    />
                                    <label
                                        for="radioButton2"
                                        class="pl-3 text-base font-medium text-[#07074D]"
                                    >
                                        Reciever
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                class="hover:shadow-form rounded-md bg-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form
