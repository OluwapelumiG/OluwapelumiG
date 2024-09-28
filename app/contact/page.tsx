'use client'
import React, { useState } from 'react';
import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="flex flex-col md:flex-row p-6 m-2 text-black">
              <div className="flex-none bg-white rounded-xl shadow-md w-full mx-4 md:w-1/3 p-6 hover:shadow-lg transition-shadow duration-300">
                <img src="https://placehold.co/200x200" alt="Profile Picture" className="rounded-xl mx-auto mb-6 hover:scale-105 transition-transform duration-300" />
                <h1 className="text-2xl text-center font-bold mb-2 hover:text-blue-500 transition-colors duration-300">Oluwapelumi Gideon, AINA</h1>
                <p className="text-zinc-400 text-center mb-4">Software Engineer</p>
                <div className="flex justify-center space-x-4 mb-6">
                  <a href="#" className="text-blue-500 bg-gray-100 shadow-md p-4 rounded-md hover:text-white hover:bg-blue-500 transition-all duration-300">
                    <IoLogoWhatsapp />
                  </a>
                  <a href="#" className="text-blue-500 bg-gray-100 shadow-md p-4 rounded-md hover:text-white hover:bg-blue-500 transition-all duration-300">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="text-blue-500 bg-gray-100 shadow-md p-4 rounded-md hover:text-white hover:bg-blue-500 transition-all duration-300">
                    <BsTwitterX />
                  </a>
                  <a href="#" className="text-blue-500 bg-gray-100 shadow-md p-4 rounded-md hover:text-white hover:bg-blue-500 transition-all duration-300">
                    <FiGithub />
                  </a>
                </div>
                <div className="bg-gray-100 shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4 hover:translate-x-2 transition-transform duration-300">
                    <span className="text-4xl mr-4">
                      <FaPhone className="text-blue-500" />
                    </span>
                    <div>
                      <p className="text-gray-500">phone</p>
                      <p>+254723909353</p>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="flex items-center mb-4 hover:translate-x-2 transition-transform duration-300">
                    <span className="text-4xl mr-4">
                      <SiMinutemailer className="text-blue-500" />
                    </span>
                    <div>
                      <p className="text-gray-500">email</p>
                      <p>+254723909353</p>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                    <span className="text-4xl mr-4">
                      <FaMapMarkerAlt className="text-blue-500" />
                    </span>
                    <div>
                      <p className="text-gray-500">location</p>
                      <p>+254723909353</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-8 bg-white rounded-xl shadow-md mx-4 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-4xl font-bold mb-6 hover:text-blue-500 transition-colors duration-300">Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 shadow-md p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <p className="flex items-center text-lg font-semibold mb-2">
                        <FaPhone className="mr-2 text-blue-500" size={20} />
                        Phone:
                        </p>
                        <p className="text-gray-600 ml-7">+254723903353</p>
                        <p className="text-gray-600 ml-7">+254738509151</p>
                    <p className="text-gray-700">
                      Feel free to call or drop an SMS to any of the numbers above.
                    </p>
                  </div>
                  <div className="bg-blue-50 shadow-md p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <p className="flex items-center text-lg font-semibold mb-2">
                        <MdOutlineEmail className="mr-2 text-blue-500" size={20} />
                        Email:
                        </p>
                        <p className="text-gray-600 ml-7">beatricewambui@gmail.com</p>
                    <p className="text-gray-700">
                      You can send an E-mail to the above email address. 
                      
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                    I am always open to discussing new projects, opportunities in the tech world, partnerships, and mentorship.
                </p>
                
                <h3 className="text-3xl font-bold mb-6 hover:text-blue-500 transition-colors duration-300">Write to me</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name:</label>
                        <input 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
                        <input 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="message">Message:</label>
                        <textarea 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="message" 
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        ></textarea>
                    </div>
                    <button 
                        className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out py-2 px-4 rounded flex items-center justify-center w-full md:w-auto"
                        type="submit"
                    >
                        <SiMinutemailer className="mr-2" size={20} />
                        Submit
                    </button>
                </form>
                
              </div>
            </div>
      </main>
    </div>
  );
}