import Faq from '@/source/components/Faq'
import Product from '@/source/components/Products'
import QuoteContainer from '@/source/components/Quote'
import { randomInt } from 'crypto'
import Image from 'next/image'
import React from 'react'
import checkIcon from "@/assets/check-icon.png"
import unCheckIcon from "@/assets/uncheck-icon.png"
import tab1 from "@/assets/cart_tab1.png"
import newtab1 from "@/assets/new_cart_tab1.png"
import shippingLogo from "@/assets/shipping_logo.png"
import video from "@/assets/video.png"
import customerSupportLogo from "@/assets/customer_support.png"
import newtab1Cover from "@/assets/new_cart_tab_list.png"
import Review from '@/source/components/Review'
import PrimaryButton from '@/source/components/PrimaryButton'
import freeDeliveryIcon from "@/assets/freeDeliveryIcon.png";
import panIndiaIcon from "@/assets/panIndiaIcon.png";
import walletIcon from "@/assets/walletIcon.png";
import prdtsImage from "@/assets/productsImage.png";
import newUncheck from "@/assets/new_uncheck.png";
import newCheck from "@/assets/new_check_icon.png";
import "../globals.scss";
import CheckoutProduct from '@/source/components/CheckoutProduct/CheckoutProduct'
import Accordion from '@/source/components/Accordion'
import PrimaryButton2 from '@/source/components/PrimaryButton2/index'

const Checkout = () => {
    return (
        <div className='min-h-screen relative md:pt-[5vw] font-inter'>
            <div className='pt-[0] md:pt-[0] '>
                {/* Place order Indicator */}
                <div className='px-[24px] md:px-[106px] flex flex-col md:gap-[21px] md:pt-[38px] gap-[6px] pt-[17px] pb-[50px]'>
                    <div className='flex justify-between text-base-white font-roboto'>
                        <p className='text-[12px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Add To Bag</p>
                        <p className='text-[12px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Review Bag</p>
                        <p className='text-[12px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Check Out</p>
                    </div>
                    <div className='flex justify-between items-center md:px-[20px] px-[7px]'>
                        <Image src={newCheck} alt='' width={0} height={0} className='w-[21px] h-[21px] md:w-[31px] md:h-[31px]' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="471" height="6" viewBox="0 0 471 6" fill="none" className='hidden md:block'>
                            <path d="M3 3L468 3.00009" stroke="white" stroke-width="5" stroke-linecap="round" />
                        </svg>
                        {/* Mobile */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="127" height="4" viewBox="0 0 127 4" fill="none" className='md:hidden'>
                            <path d="M2.3042 1.53516H125.371" stroke="white" stroke-width="2.95361" stroke-linecap="round" />
                        </svg>

                        <Image src={newUncheck} alt='' width={0} height={0} className='w-[21px] h-[21px] md:w-[31px] md:h-[31px]' />

                        <svg xmlns="http://www.w3.org/2000/svg" width="471" height="6" viewBox="0 0 471 6" fill="none" className='hidden md:block'>
                            <path d="M3 3L468 3.00009" stroke="white" stroke-width="5" stroke-linecap="round" />
                        </svg>
                        {/* Mobile */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="127" height="4" viewBox="0 0 127 4" fill="none" className='md:hidden'>
                            <path d="M2.3042 1.53516H125.371" stroke="white" stroke-width="2.95361" stroke-linecap="round" />
                        </svg>
                        <Image src={newUncheck} alt='' width={0} height={0} className='w-[21px] h-[21px] md:w-[31px] md:h-[31px]' />
                    </div>
                </div>
            <div>
            <div className="hidden relative h-[auto] w-full  md:flex flex-col items-center xl:px-[212px] lg:px-[150px] md:px-[70px] text-base-white  font-open-sans mb-[100px]">
              <div className='' style={{width: "85vw", display:"flex", flexDirection: "column", alignItems: "center", marginTop: "30px",  marginBottom: "100px", justifyContent:"center"}}>
                <CheckoutProduct />
             </div>
            </div>
            
           
                    
                </div>
            </div>

        </div>
    )
}

export default Checkout