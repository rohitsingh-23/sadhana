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
// import "../../globals";
import CheckoutProduct from '@/source/components/CheckoutProduct/CheckoutProduct'
import Accordion from '@/source/components/Accordion'
import PrimaryButton2 from '@/source/components/PrimaryButton2/index'


const PreOrder = () => {
    return (
        <div className='min-h-screen  md:pt-[3vw] font-inter'>
            {/* Shiv Image */}
            <div className='h-[452px] md:h-[1344.195px] bg-cover w-full md:bg-[80%_-17vw] mix-blend-color-dodge bg-[85%] bg-shiva-bg absolute top-0 z-0'></div>

            <div className='pt-[0] md:pt-[0] realtive left-0 z-11 w-full bg-[#001d2d45]'>
                {/* Place order Indicator */}
                <div className='px-[24px] md:px-[106px] flex flex-col md:gap-[21px] bg-[#001d2d45] md:pt-[38px] gap-[6px] pt-[17px]'>
                    <div className='flex justify-between text-base-white font-roboto'>
                        <p className='text-[12px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Add To Bag</p>
                        <p className='text-[12px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Review Bag</p>
                        <p className='text-[12px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Check Out</p>
                    </div>
                    <div className='flex justify-between items-center md:px-[20px] px-[7px]'>
                        <Image src={newUncheck} alt='' width={0} height={0} className='w-[21px] h-[21px] md:w-[31px] md:h-[31px]' />
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
                {/* Product Add to Bag */}
                <div className='bg-[#001d2d45] font-sans pt-[100px]'>
                    <div className='text-white flex justify-between w-[90%] m-[auto]'>
                        <div className='w-[50%]  flex justify-center items-end flex-col'>
                            <Image src={newtab1} alt='Tab' width={389} height={349} className='w-[234.911px] h-[210.755px] md:w-[489px] md:h-[349px]' />
                            <Image src={newtab1Cover} alt='tab cover' className='w-[70%]' />
                             <div className='mt-[30px] ml-[30px]'>
                                <p className='mb-[10px] ml-[10px]'>Key features</p>
                                <li className='text-[14px]'>Distraction-Free Devotion</li>
                                <li className='text-[14px]'>Access to Sacred Vedas</li>
                                <li className='text-[14px]'>Flagship Sadhana App for Immersive & Interactive Practices</li>
                                <li className='text-[14px]'>Curated Spiritual Content - Books, Courses, Podcasts, Devotional Music and more.</li>
                                <li className='text-[14px]'>Premium Artist designed Flip Case Included</li>
                            </div>
                        </div>
                        <div className='w-[40%] mt-[20px] mr-[5%]'>
                            <p className='text-[20px] font-[500]'>Sadhana Tablet</p>
                            <p className='text-[14px] font-[300]'>Your Path to Spiritual Awakening</p>
                            <p className='text-[10px] font-[300] w-[75%] mt-[20px]'>Embark on a profound spiritual journey with the world’s first customised tablet for transformative spiritual Apps and content.</p>
                            <p className='text-[25px] font-[700] w-[75%] mt-[50px]'>INR 3,900 + GST</p>
                            <p className='text-[20px] font-[300] w-[75%]'>M.R.P : INR 4,300 + GST</p>
                            <div className="mt-[20px] z-20 absolute">
                                <PrimaryButton2 text={"Add to Bag"} pathUrl={"checkout"} width="w-[180px]" />
                            </div>
                            <p className='text-[12px] mt-[100px]'>Only 3 stocks left!</p>
                            <p className='text-[10px] font-[300] w-[75%] mt-[10px]'>Complimentary:  Includes Hand-Painted Lord Shiva Flip Case for Limited Time Only</p>
                            <div className='mt-[40px]'>
                                <hr />
                                <div className='flex justify-between mt-[15px] mb-[15px]'>
                                    <div className='w-[80px] flex flex-col items-center'>
                                        <Image width={50} src={shippingLogo} alt='shipping_logo' />
                                        <p className='text-[10px] text-center mt-[8px]'>World wide Shipping</p>
                                    </div>
                                    <div className='w-[80px] flex flex-col items-center'>
                                        <Image width={50} src={shippingLogo} alt='shipping_logo' />
                                        <p className='text-[10px] text-center mt-[8px]'>12-Month Replacement Warranty</p>
                                    </div>
                                    <div className='w-[80px] flex flex-col items-center'>
                                        <Image width={50} src={customerSupportLogo} alt='customer_support_logo' />
                                        <p className='text-[10px] text-center mt-[8px]'>World wide Shipping</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    
                </div>
                

                <div className='bg-[#001d2d45] text-white pt-[100px] w-[100%] p-[100px] flex items-center flex-col'>
                    <p className='text-[30px] font-[600] text-center'>What’s Inside The Box</p>
                    <Image className='w-[80%]' src={video} alt='video'/>
                </div>
        

            <Review />
            {/* FAQ Container */}
            <div className="hidden relative h-[auto] w-full  md:flex flex-col items-center xl:px-[212px] lg:px-[150px] md:px-[70px] text-base-white bg-[#001d2d45] font-open-sans mb-[100px]">
              <div className="bg-durga-bg absolute top-0 left-0 w-full h-screen bg-cover mix-blend-color-dodge z-0"></div>
              {/* FAQ Main */}
                <div className='z-10  mt-[20px]'>
                    <p className="text-[36px] font-[700] mb-[33px] text-center mt-[30px]">FAQs</p>
                    <Accordion title={"What is the Sadhana Tablet?"} desc="The Sadhana Tablet is a specially designed tablet for spiritual seekers and practitioners. It provides access to a wide range of  pre-installed Apps for Sadhana, spiritual content, rituals, and practices, making it a dedicated space for your spiritual journey."/>
                    <Accordion title={"What are the key features of the Sadhana Tablet?"} desc="The tablet offers Distraction-Free Devotion, access to Sacred Vedas, a flagship Sadhana App, curated spiritual content, and comes with a premium Flip Case for protection."/>
                    <Accordion title="Can I use the Sadhana Tablet for meditation and mantra sadhana?" desc="Yes, the Sadhana Tablet provides a dedicated space for focused meditation, mantra sadhana, and spiritual growth. It includes the immersive Sadhana App for these practices."/>
                    <Accordion title="What content is included with the Sadhana Tablet?" desc="The tablet comes preloaded with a collection of sacred texts,books, devotional music, interactive worship with Vedic rituals and Sadhana, guided podcasts, and meditation courses. It also includes exclusive content worth over $1500."/>
                    <Accordion title="Is the Sadhana Tablet user-friendly?" desc="Yes, the tablet is designed to be user-friendly and intuitive, ensuring a seamless experience for spiritual practices and accessing content."/>
                    <Accordion title="Can I download content from other app stores onto the Sadhana Tablet?" desc="The Sadhana Tablet is customised to provide a distraction-free environment for your spiritual practices. While you can't download content from other app stores, our VSF team envisages continually updating and adding more spiritual content to enrich your experience."/>
                    <Accordion title="What is the price of the Sadhana Tablet?" desc="The Sadhana Tablet is priced at $500, which includes shipping and a 12-month replacement warranty. The premium Flip Case is included as an accessory."/>
                    <Accordion title="I already have a Sadhana App account, can I use the same account on the Sadhana Tablet, and will my data be transferred?" desc="Yes, you can use the same Sadhana App account on the Sadhana Tablet, and your data will be accessible. Your progress and preferences will be synchronised for a seamless experience."/>
                    <Accordion title="Can I access books, podcasts, and music in offline mode without an internet connection?" desc="Yes, you can enjoy books, podcasts, and music in offline mode, making it convenient for uninterrupted spiritual reading and listening."/>
                    <Accordion title="Is there a subscription fee required to access content on the Sadhana Tablet?" desc="No, there is no subscription fee required to access the content on the Sadhana Tablet. It comes preloaded with exclusive content valued at $1500, allowing you to explore a wealth of spiritual wisdom at no additional cost"/>
                </div>
            </div>  
            </div>

        </div>
    )
}

export default PreOrder