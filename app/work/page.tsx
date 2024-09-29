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
        <div className="flex flex-col w-full lg:flex-row p-4 md:p-6 m-2 text-black">
          <div className="flex-1 p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-md mx-2 sm:mx-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 hover:text-blue-500 transition-colors duration-300">Work</h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Yeah, I know. I'll update you in no time.
              {/* <br /> */}
              {/* Exciting blogs coming your way soonest. */}
            </p>
            
          </div>
        </div>
      </main>
    </div>
  );
}