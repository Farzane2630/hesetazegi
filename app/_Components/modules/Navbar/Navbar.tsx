"use client";
import ArrowDown from "@/public/Icons/ArrowDown";
import Link from "next/link";
import { useState } from "react";
import SubMenuCard from "./SubMenuCard";
import CategoryCard from "./CategoryCard";
import { Category } from "@/public/Types/types";

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

function Navbar({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full flex flex-row justify-start items-center gap-x-6">
      <div
        onMouseMove={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setHover(true)}
        className="flex flex-row justify-center items-center gap-x-1">
        <NavItem title="Categories" />
        <ArrowDown className="cursor-pointer rotate" />
      </div>
      {hover ? (
        <CategoryCard categories={categories} />
      ) : null}
      <div
        onMouseMove={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(!open)}
        className="flex flex-row items-center relative gap-x-1">
        <NavItem title="Pages" />
        <ArrowDown className="cursor-pointer rotate" />
        {open ? (
          <SubMenuCard />
        ) : null}
      </div>

      <NavItem title="Contact Us" />
      <NavItem title="About Us" />
    </div>
  )
}

export default Navbar