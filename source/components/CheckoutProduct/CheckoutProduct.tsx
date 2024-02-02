"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import tablet from "@/assets/tablet.png"
import tabletCase from "@assets/tabletCase.png"
import productBackground from "@/assets/productBackground.png"
import PrimaryButton from '../PrimaryButton'

const CheckoutProduct = () => {
    const [tabQuantity, setTabQuantity] = useState(1);

    const handleTabQuantityChange = (value: number) => {
        if (tabQuantity == 1 && value < 0) {
            setTabQuantity((prev)=> prev)
        } else {
            setTabQuantity((prev)=> prev + value)
            
        }
     }
    
    return (
        <div className='z-10 flex flex-col justify-between items-center gap-[40px]'>
            <p className='flex justify-between text-[28px] font-[600] mb-[20px]'>Review Your Bag</p>
        <div className='flex justify-between gap-[40px] w-[80%] h-[175px] m-[30px]'>
            <div>
                <Image src={tablet} alt="Product" className="md:mt-[-5%] h-[100%] mt[10px]" />
            </div>
            <div className='flex flex-col justify-between text-white'>
            <p className='text-[28px]' >Shiva tablet 10-inch xxxxxx</p>
            <p className='text-[14px] text-[#EAEAEA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p className='text-[15px] text-[#EAEAEA]'>Show Box and Tablet Details</p>
            </div>
            <div className='text-white flex flex-col items-center' >
                <p style={{fontSize: "10px"}}>Quantity</p>
            <div className='w-[65px] flex justify-around' style={{border: "1px solid white", borderRadius: "3px"}}>
                <button className={tabQuantity ==1 ? 'opacity-0': ""} onClick={()=> handleTabQuantityChange(-1)}>-</button>
                <p style={{ fontWeight: "bold" }}>{tabQuantity }</p>
                <button onClick={()=> handleTabQuantityChange(1)}>+</button>
                </div>
            </div>
            <div className='text-white flex flex-col justify-between h-[70px]'>
                <p className='text-[12px] font-[500]'>{`$${600*tabQuantity}`}</p>
                <button className='text-[12px] font-[400]'>Remove</button>
            </div>
        </div>
        <div className='flex justify-between gap-[40px] w-[80%] h-[175px]'>
            <div>
                <Image src={tabletCase} alt="Product" className="md:mt-[-5%] h-[100%] mt-[10px]"/>
                {/* <div className="bg-product-background-bg absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-center mix-blend-color-dodge  z-0"></div> */}
            </div>
            <div className='flex flex-col justify-between text-white'>
            <p className='text-[28px] decoration-1' >Slip Case</p>
            <p className='text-[14px] text-[#EAEAEA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p className='text-[15px] text-[#EAEAEA]'>Show Box and Tablet Details</p>
            </div>
            <div className='text-white flex flex-col items-center' >
                <p style={{fontSize: "10px"}}>Quantity</p>
            <div className='w-[65px] flex justify-around' style={{ border: "1px solid white", borderRadius: "3px"}}>
                <button className='text-[grey]'>-</button>
                <p className='font-[700]' >{tabQuantity }</p>
                <button className='text-[grey]'>+</button>
                </div>
            </div>
            <div className='text-white flex flex-col justify-between h-[70px]'>
                <p className='text-[12px] font-[500] line-through'>{`$${600*tabQuantity}`}</p>
                <button className='text-[12px] font-[400]'>Remove</button>
            </div>
            </div>
            <div className='mt-[60px] w-[100%] flex justify-between flex-col items-center'>
                <div className='flex justify-between text-[18px] font-[600] gap-[40px] w-[80%]'>
                    <p>Subtotal</p>
                    <p>{`$${600*tabQuantity} `}+ GST</p>   
                </div>
                <div className='flex justify-between w-[80%] text-[12px] mt-[30px]' >
                    <p>Tax</p>
                    <p>18% CGST</p>   
                </div>
                <div className='flex justify-between w-[80%] text-[12px] mt-[10px] gap-[40px]' >
                    <p>Shipping</p>
                    <p>Free</p>   
                </div>
                <div className='flex justify-between  w-[80%] text-[18px] font-[600] mt-[30px] gap-[40px]'>
                    <p>Total</p>
                    <p>{`$${tabQuantity*600*1.18}`}</p>   
                </div>
            </div>
            <div className='mt-[30px] flex justify-end w-[85%]'>

            <PrimaryButton text={"Checkout"} pathUrl={"billingDetails"}/>
            </div>
            <div className='mt-[30px]'>
                <p className='text-[16px] font-[700]'>Warranty and Delivery Information</p>
            </div>

            <div className='flex justify-between gap-[25%]'>
                <p className='text-[12px] text-[#EAEAEA]'><span className='text-[14px] font-[700] text-[white]'>Warranty Information:</span> Your Sadhana Tablet comes with a 12-month replacement warranty. In case of any issues, please contact our customer support for assistance.</p>
                <p className='text-[12px] text-[#EAEAEA]'><span className='text-[14px] font-[700]'>Delivery Information:</span> We aim to deliver your Sadhana Tablet to your doorstep within (Estimated Delivery Timeframe) from the date of purchase. You will receive tracking information once your tablet ships.</p>
            </div>
            <p  className='w-[40%] mt-[40px] text-[12px] text-[#EAEAEA] text-center'><span className='text-[14px] font-[700] text-[white]'>Terms and Conditions<br/></span> By proceeding with your order, you agree to our (T&C).<br/>Please review our (Privacy Policy) for information on how we handle your data.</p>
        </div>
  )
}

export default CheckoutProduct


// className='flex flex-col gap-4 text-white '