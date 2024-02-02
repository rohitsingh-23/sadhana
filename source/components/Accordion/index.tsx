"use client"

import React, { useState } from 'react'
import dropDownIcon from "@/assets/dropdown_icon.png";
import Image from 'next/image';


interface AccordionProps {
  title: String;
  desc: String;
}


const Accordion:React.FC<AccordionProps> = ({title, desc}) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
       <div className="font-[400] mr-[25px]" >
                <div className="border-t border-white pt-[25px] pb-[25px] pl-[25px] "  style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "80vw"}}>
        <p className=" font-[400] pr-[138px]">{ title }</p>
                <button className={`w-[15px] h-[15px] mr-[5px] transition-all duration-300 ${isOpen? "rotate-180 " : ""}`} onClick={toggleAccordion}>
                  <Image src={dropDownIcon } alt="dropDownIcon" />
                </button>
                </div>
                  {isOpen && (
                  <div className=" font-[400] pb-[25px] pl-[25px]">
                  <p>{ desc }</p>
                </div>
                )}
      </div>
  )
}

export default Accordion