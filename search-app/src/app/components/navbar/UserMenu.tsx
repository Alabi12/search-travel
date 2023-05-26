"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItems from "./MenuItems";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevValue) => !prevValue);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-semibold-100 transition cursor-pointer"
        >
          Worank your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 py-1 px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />

          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <MenuItems onClick={() => {}} label="Login" />
          </div>
          <div className="flex flex-col cursor-pointer">
            <MenuItems onClick={() => {}} label="Sign up" />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
