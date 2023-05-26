"use client";

import React from "react";
import Image from "next/image"; // Assuming there is a component named Image imported from a local file

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  );
};

export default Avatar;
