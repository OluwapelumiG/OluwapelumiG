import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Home(): JSX.Element {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col lg:flex-row p-4 md:p-6 m-2 text-black">
          <div className="flex-none bg-white rounded-xl shadow-md w-full mx-2 sm:mx-4 lg:w-1/3 p-4 sm:p-6 mb-6 lg:mb-0 hover:shadow-lg transition-shadow duration-300">
            <Image src="/images/DSC.jpg" alt="My Picture" width={200} height={200} className="rounded-xl mx-auto mb-6 hover:scale-105 transition-transform duration-300" />
            <h1 className="text-xl sm:text-2xl text-center font-bold mb-2 hover:text-blue-500 transition-colors duration-300">Oluwapelumi Gideon, AINA</h1>
            <p className="text-zinc-400 text-center mb-4">Software Engineer</p>
            <div className="flex justify-center space-x-2 sm:space-x-4 mb-6">
              <a href="https://wa.me/message/CRHFR45SVC6IH1" target="_blank" className="text-blue-500 bg-gray-100 shadow-md p-2 sm:p-4 rounded-md hover:text-white hover:bg-blue-500 transition-all duration-300">
                <IoLogoWhatsapp />
              </a>
              <a href="https://web.facebook.com/oluwapelumigedion" target="_blank" className="text-blue-500 bg-gray-100 shadow-md p-2 sm:p-4 rounded-md hover:text-white hover:bg-blue-500 transition-all duration-300">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com/gapsaina" target="_blank" className="text-blue-500 bg-gray-100 shadow-md p-2 sm:p-4 rounded-md hover:text-white hover:bg-blue-500 transition-all duration-300">
                <BsTwitterX />
              </a>
              <a href="https://github.com/OluwapelumiG" target="_blank" className="text-blue-500 bg-gray-100 shadow-md p-2 sm:p-4 rounded-md hover:text-white hover:bg-blue-500 transition-all duration-300">
                <FiGithub />
              </a>
            </div>
            <div className="bg-gray-100 shadow-md p-4 sm:p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4 hover:translate-x-2 transition-transform duration-300">
                <span className="text-3xl sm:text-4xl mr-4">
                  <FaPhone className="text-blue-500" />
                </span>
                <div>
                  <p className="text-gray-500">phone</p>
                  <p className="text-sm sm:text-base">+2348129241613</p>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="flex items-center mb-4 hover:translate-x-2 transition-transform duration-300">
                <span className="text-3xl sm:text-4xl mr-4">
                  <SiMinutemailer className="text-blue-500" />
                </span>
                <div>
                  <p className="text-gray-500">email</p>
                  <p className="text-sm sm:text-base">ainaoluwapelumigideon@gmail.com</p>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <span className="text-3xl sm:text-4xl mr-4">
                  <FaMapMarkerAlt className="text-blue-500" />
                </span>
                <div>
                  <p className="text-gray-500">location</p>
                  <p className="text-sm sm:text-base">Lokoja, Kogi State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-md mx-2 sm:mx-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 hover:text-blue-500 transition-colors duration-300">Welcome,</h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              I'm glad you're here. I am deeply committed to delivering high-quality software solutions that meet the unique needs of my clients. What you'll be seeing here is a showcase of my skills, projects, and experiences.
              <br />
              Be my guest as I take you on a journey through my professional life. I hope you find it informative and inspiring.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 hover:text-blue-500 transition-colors duration-300">What do I do?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="bg-gray-100 shadow-md p-4 sm:p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 hover:text-blue-500 transition-colors duration-300">Web Development</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to
                  create fast, scalable, and user-friendly applications.
                </p>
              </div>
              <div className="bg-gray-100 shadow-md p-4 sm:p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 hover:text-blue-500 transition-colors duration-300">App Development</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people's lives. Let's turn ideas into
                  reality and shape the future together.
                </p>
              </div>
              <div className="bg-gray-100 shadow-md p-4 sm:p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 hover:text-blue-500 transition-colors duration-300">Data Analysis</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I'm truly fanatic about.
                </p>
              </div>
              <div className="bg-gray-100 shadow-md p-4 sm:p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 hover:text-blue-500 transition-colors duration-300">Mentorship</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}