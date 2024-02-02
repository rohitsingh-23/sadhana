"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface PrimaryButtonProps {
  text: String;
  pathUrl: String;
  width: String;
}

const PrimaryButton2: React.FC<PrimaryButtonProps> = ({ text, pathUrl, width }) => {
  const router = useRouter();
  return (<button
      onClick={() => router.push(`/${pathUrl}`)}
      className={`w-[480px] bg-btn h-[80px] md:w-[201px] md:h-[60px] bg-cover bg-no-repeat bg-center glow text-[10px] md:text-[14px] md:font-[500] text-white flex justify-center items-center z-12`}
    >
      <p>{text}</p>
      </button>
  );
};

export default PrimaryButton2;
