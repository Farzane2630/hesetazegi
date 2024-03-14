"use client";
import ArrowDown from "@/public/Icons/ArrowDown";
import Link from "next/link";
import { useState } from "react";

const NavItem = (props: { title: string }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href="/"
      onMouseMove={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="text-[#3E3232] text-base font-medium leading-[18.75 px]">
      {props.title}

      <div className={`w-[10px] h-[4px] ${isHover ? " rounded-xl bg-[#F81539]" : ""}`}></div>
    </Link>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-row justify-start items-center gap-x-6">
      <div onClick={() => setOpen(!open)} className="flex flex-row justify-center items-center gap-x-1">
        <NavItem title="Categories" />
        <ArrowDown className="cursor-pointer rotate" />
      </div>
      {/* {open ? (
        <div className="dropdown-menu text-capitalize">
          <Link href="reservation" className="dropdown-item">
            Reservation
          </Link>
          <Link href="testimonial" className="dropdown-item">
            Testimonial
          </Link>
        </div>
      ) : null} */}
      <div onClick={() => setOpen(!open)} className="flex flex-row items-center gap-x-1">
        <NavItem title="Pages" />
        <ArrowDown className="cursor-pointer rotate" />
      </div>

      <NavItem title="Contact Us" />
      <NavItem title="About Us" />
    </div>
  )
}

export default Navbar