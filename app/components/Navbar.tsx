import Image from "next/image";
import logo from "../../public/assets/logoo.png";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "HOME" },
  { name: "ABOUT US" },
  { name: "FAQS" },
  { name: "TEAM" },
];

export function Navbar() {
  return (
    
   <div className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20 bg-black">
  <div className="flex items-center">
    <Image src={logo} alt="Logo" className="w-[100px] lg:w-auto" />

    <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
      {navLinks.map((item, index) => (
        <p className="text-white font-medium" key={index}>
          {item.name}
        </p>
          ))}
        </div>
      </div>

  <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
          SIGN UP
        </p>

     { /*  <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            SIGN IN
          </span>
        </div> */ }

        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
        </div> 


        <div/>
    </div>
   
  );
}
