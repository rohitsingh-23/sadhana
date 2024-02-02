
import React from 'react'
import "../globals.scss";
import newUncheck from "@/assets/new_uncheck.png";
import newCheck from "@/assets/new_check_icon.png";
import PrimaryButton from '@/source/components/PrimaryButton';
import Image from 'next/image';
const Checkout = () => {


    return (
        <div className='min-h-screen relative md:pt-[5vw] font-inter'>
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

                        <Image src={newCheck} alt='' width={0} height={0} className='w-[21px] h-[21px] md:w-[31px] md:h-[31px]' />

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
            <p className='text-[30px] text-[#FFE8BA] ml-[10%] mt-[30px] font-[500]'>Billing Details</p>
            <form className='w-[80%] m-auto mt-[30px] text-white text-[12px]' action="">
                <div className='lg:flex block md:w-[100%] justify-between w-[100%] m-auto mt-[30px] text-white text-[12px]'>
                    <div className='lg:w-[40%] w-[100%] '>
                        <div className='mb-[15px]'>
                            <label htmlFor="firstName">First Name*</label><br />
                            <input className=' mt-[15px]' style={{border: "none", borderBottom: "1px solid white", backgroundColor: "transparent", width: "100%", padding: "5px 5px", color: "white"}} type="text" id='firstName'/>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor="lastName">Last Name*</label><br />
                            <input className=' mt-[15px]' style={{border: "none", borderBottom: "1px solid white", backgroundColor: "transparent", width: "100%", padding: "5px 5px", color: "white"}} type="text" id='lastName'/>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor="companyName">Company name (optional)</label><br />
                            <input className=' mt-[15px]' style={{border: "none", borderBottom: "1px solid white", backgroundColor: "transparent", width: "100%", padding: "5px 5px", color: "white"}} type="text" id='companyName'/>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor="country">Country/Region*</label><br />
                            <input className=' mt-[15px]' style={{border: "none", borderBottom: "1px solid white", backgroundColor: "transparent", width: "100%", padding: "5px 5px", color: "white"}} type="text" id='country'/>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor="street">Street address</label><br />
                            <input className=' mt-[15px] placeholder:text-[11px]' placeholder='House number and street name' style={{ borderBottom: "1px solid white", backgroundColor: "transparent", width: "100%", padding: "5px 5px", color: "white"}} type="text" id='street'/>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor="street">Apartment, suite, unit, etc. (optional)</label><br />
                            <input className=' mt-[15px] placeholder:text-[11px]' placeholder='House number and street name' style={{border: "none", borderBottom: "1px solid white", backgroundColor: "transparent", width: "100%", padding: "5px 5px", color: "white"}} type="text" id='street'/>
                        </div>
                </div>
                    <div  className='lg:w-[40%] w-[100%] '>
                        <div className='mb-[15px]'>
                            <label htmlFor="town">Town/City*</label><br />
                            <input className=' mt-[15px]' style={{border: "none", borderBottom: "1px solid white", backgroundColor: "transparent", width: "100%", padding: "5px 5px", color: "white"}} type="text" id='town'/>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor="state">State*</label><br />
                            <input className=' mt-[15px]' style={{border: "none", borderBottom: "1px solid white", backgroundColor: "transparent", width: "100%", padding: "5px 5px", color: "white"}} type="text" id='state'/>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor="pincode">PIN Code*</label><br />
                            <input className=' mt-[15px]' style={{border: "none", borderBottom: "1px solid white", backgroundColor: "transparent", width: "100%", padding: "5px 5px", color: "white"}} type="text" id='pincode'/>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor="phone">Phone</label><br />
                            <input className=' mt-[15px]' style={{border: "none", borderBottom: "1px solid white", backgroundColor: "transparent", width: "100%", padding: "5px 5px", color: "white"}} type="text" id='phone'/>
                        </div>
                        <div className='mb-[15px]'>
                            <label htmlFor="email">Email address*</label><br />
                            <input className=' mt-[15px]' style={{border: "none", borderBottom: "1px solid white", backgroundColor: "transparent", width: "100%", padding: "5px 5px", color: "white"}} type="text" id='email'/>
                        </div>
                       
                    </div>
                </div>
                
                <p className='mt-[50px] font-[500] text-[14px]'>Your Order</p>
                <div>
                    <table className='w-[100%] text-right border-1 mt-[20px]' style={{backgroundColor: "transparent"}}>
                        <tr>
                            <td className='p-[15px]'>Product</td>
                            <td className='p-[15px]'>Subtotal</td>
                        </tr>
                        <tr style={{border: "1px solid white"}}>
                            <td className='border-[1px] p-[15px]'>The Sadhana Booklet Pack - English ×1</td>
                            <td className='border-[1px] p-[15px]'>400.00₹</td>
                        </tr>
                        <tr >
                            <td className='p-[15px]'>Subtotal</td>
                            <td className='border-[1px] p-[15px]'>400.00₹</td>
                        </tr>
                        <tr>
                            <td className='p-[15px]'>Total</td>
                            <td className='border-[1px] p-[15px]'>400</td>
                        </tr>
                    </table>
                    <div className='flex justify-end mt-[50px] mb-[50px]'>
                        <PrimaryButton text={"Checkout"} pathUrl={""}/>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default Checkout