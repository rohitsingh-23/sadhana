import React from 'react'

interface QuoteContainerInterface {
    quote: string,
    authorName: string
}

const QuoteContainer: React.FC<QuoteContainerInterface> = ({
    quote,
    authorName
}) => {
    return (
        <div className="md:mx-[24vw] mx-[10vw] min-h-[195px] flex justify-center flex-col items-end text-base-white">
            <div className="flex">
                <h3 className="p-4 font-open-sans text-center text-[14px] md:text-[27px] italic font-[600] tracking-[0.42px] md:tracking-[0.81px] leading-[18.5px] md:leading-[35px] relative">
                    {quote}
                    <svg width="54" height="45" viewBox="0 0 54 45" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-0 left-[-5%] hidden md:block'>
                            <path d="M10.4 28.15C11.7 27.05 13.35 26.5 15.35 26.5C17.55 26.5 19.55 27.25 21.35 28.75C23.15 30.25 24.05 32.3 24.05 34.9C24.05 37.7 23.1 40.05 21.2 41.95C19.3 43.85 16.8 44.8 13.7 44.8C9.4 44.8 6.1 43.2 3.8 40C1.6 36.7 0.5 32.95 0.5 28.75C0.5 22.85 2.2 17.4 5.6 12.4C9 7.4 14.2 3.45 21.2 0.549993L23.6 4.9C21.3 5.9 19.05 7.3 16.85 9.1C14.65 10.8 12.8 12.8 11.3 15.1C9.9 17.4 9.2 19.9 9.2 22.6C9.2 23.5 9.25 24.4 9.35 25.3C9.55 26.2 9.9 27.15 10.4 28.15ZM39.65 28.15C40.95 27.05 42.6 26.5 44.6 26.5C46.8 26.5 48.8 27.25 50.6 28.75C52.4 30.25 53.3 32.3 53.3 34.9C53.3 37.7 52.35 40.05 50.45 41.95C48.55 43.85 46.05 44.8 42.95 44.8C38.65 44.8 35.35 43.2 33.05 40C30.85 36.7 29.75 32.95 29.75 28.75C29.75 22.85 31.45 17.4 34.85 12.4C38.25 7.4 43.45 3.45 50.45 0.549993L52.85 4.9C50.55 5.9 48.3 7.3 46.1 9.1C43.9 10.8 42.05 12.8 40.55 15.1C39.15 17.4 38.45 19.9 38.45 22.6C38.45 23.5 38.5 24.4 38.6 25.3C38.8 26.2 39.15 27.15 39.65 28.15Z" fill="white"/>
                    </svg>
                    <svg width="54" height="45" viewBox="0 0 54 45" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 right-0 hidden md:block'>
                            <path d="M13.9 17C12.6 18.1 10.95 18.65 8.95 18.65C6.75 18.65 4.75 17.9 2.95 16.4C1.15 14.8 0.25 12.75 0.25 10.25C0.25 7.44999 1.2 5.09999 3.1 3.2C5 1.3 7.5 0.349996 10.6 0.349996C14.9 0.349996 18.15 2 20.35 5.3C22.65 8.5 23.8 12.2 23.8 16.4C23.8 22.3 22.1 27.75 18.7 32.75C15.3 37.75 10.1 41.7 3.1 44.6L0.7 40.25C3 39.25 5.25 37.9 7.45 36.2C9.65 34.4 11.45 32.35 12.85 30.05C14.35 27.65 15.1 25.15 15.1 22.55C15.1 21.65 15 20.75 14.8 19.85C14.7 18.95 14.4 18 13.9 17ZM43.15 17C41.85 18.1 40.2 18.65 38.2 18.65C36 18.65 34 17.9 32.2 16.4C30.4 14.8 29.5 12.75 29.5 10.25C29.5 7.44999 30.45 5.09999 32.35 3.2C34.25 1.3 36.75 0.349996 39.85 0.349996C44.15 0.349996 47.4 2 49.6 5.3C51.9 8.5 53.05 12.2 53.05 16.4C53.05 22.3 51.35 27.75 47.95 32.75C44.55 37.75 39.35 41.7 32.35 44.6L29.95 40.25C32.25 39.25 34.5 37.9 36.7 36.2C38.9 34.4 40.7 32.35 42.1 30.05C43.6 27.65 44.35 25.15 44.35 22.55C44.35 21.65 44.25 20.75 44.05 19.85C43.95 18.95 43.65 18 43.15 17Z" fill="white"/>
                    </svg>

                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='visible md:hidden absolute top-0 left-[-5%]'>
                        <path d="M4.47548 8.35712C5.06007 8.85178 5.80205 9.0991 6.70143 9.0991C7.69074 9.0991 8.59011 8.76184 9.39954 8.08731C10.209 7.41278 10.6137 6.49092 10.6137 5.32174C10.6137 4.06262 10.1865 3.00586 9.33209 2.15145C8.47769 1.29705 7.35347 0.869848 5.95944 0.869848C4.02579 0.869848 2.54183 1.58935 1.50755 3.02834C0.518242 4.5123 0.0235874 6.19863 0.0235874 8.08731C0.0235874 10.7405 0.788054 13.1912 2.31699 15.4397C3.84592 17.6881 6.18429 19.4644 9.33209 20.7685L10.4113 18.8123C9.37706 18.3626 8.36526 17.7331 7.37596 16.9236C6.38665 16.1592 5.55473 15.2598 4.8802 14.2255C4.25064 13.1912 3.93586 12.067 3.93586 10.8529C3.93586 10.4482 3.95834 10.0434 4.00331 9.63873C4.09325 9.23401 4.25064 8.80681 4.47548 8.35712ZM17.6288 8.35712C18.2134 8.85178 18.9554 9.0991 19.8547 9.0991C20.8441 9.0991 21.7434 8.76184 22.5529 8.08731C23.3623 7.41278 23.767 6.49092 23.767 5.32174C23.767 4.06262 23.3398 3.00586 22.4854 2.15145C21.631 1.29705 20.5068 0.869848 19.1128 0.869848C17.1791 0.869848 15.6951 1.58935 14.6609 3.02834C13.6716 4.5123 13.1769 6.19863 13.1769 8.08731C13.1769 10.7405 13.9414 13.1912 15.4703 15.4397C16.9992 17.6881 19.3376 19.4644 22.4854 20.7685L23.5647 18.8123C22.5304 18.3626 21.5186 17.7331 20.5293 16.9236C19.54 16.1592 18.708 15.2598 18.0335 14.2255C17.404 13.1912 17.0892 12.067 17.0892 10.8529C17.0892 10.4482 17.1117 10.0434 17.1566 9.63873C17.2466 9.23401 17.404 8.80681 17.6288 8.35712Z" fill="white"/>
                    </svg>

                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 right-0 md:hidden'>
                        <path d="M19.5245 8.35712C18.9399 8.85178 18.1979 9.0991 17.2986 9.0991C16.3093 9.0991 15.4099 8.76184 14.6005 8.08731C13.791 7.41278 13.3863 6.49092 13.3863 5.32174C13.3863 4.06262 13.8135 3.00586 14.6679 2.15145C15.5223 1.29705 16.6465 0.869848 18.0406 0.869848C19.9742 0.869848 21.4582 1.58935 22.4924 3.02834C23.4818 4.5123 23.9764 6.19863 23.9764 8.08731C23.9764 10.7405 23.2119 13.1912 21.683 15.4397C20.1541 17.6881 17.8157 19.4644 14.6679 20.7685L13.5887 18.8123C14.6229 18.3626 15.6347 17.7331 16.624 16.9236C17.6134 16.1592 18.4453 15.2598 19.1198 14.2255C19.7494 13.1912 20.0641 12.067 20.0641 10.8529C20.0641 10.4482 20.0417 10.0434 19.9967 9.63873C19.9068 9.23401 19.7494 8.80681 19.5245 8.35712ZM6.3712 8.35712C5.78661 8.85178 5.04463 9.0991 4.14526 9.0991C3.15595 9.0991 2.25657 8.76184 1.44714 8.08731C0.637704 7.41278 0.232986 6.49092 0.232986 5.32174C0.232986 4.06262 0.660188 3.00586 1.51459 2.15145C2.369 1.29705 3.49321 0.869848 4.88724 0.869848C6.82089 0.869848 8.30485 1.58935 9.33913 3.02834C10.3284 4.5123 10.8231 6.19863 10.8231 8.08731C10.8231 10.7405 10.0586 13.1912 8.5297 15.4397C7.00076 17.6881 4.6624 19.4644 1.51459 20.7685L0.435346 18.8123C1.46962 18.3626 2.48142 17.7331 3.47073 16.9236C4.46004 16.1592 5.29196 15.2598 5.96648 14.2255C6.59604 13.1912 6.91082 12.067 6.91082 10.8529C6.91082 10.4482 6.88834 10.0434 6.84337 9.63873C6.75344 9.23401 6.59605 8.80681 6.3712 8.35712Z" fill="white"/>
                    </svg>
                </h3>
            </div>
            <h6 className="pt-[42px] items-end text-[14.4px] leading-[22px] tracking-[0.434px] md:text-[18px] italic font-medium font-open-sans md:pr-[3%]">- {authorName}</h6>
        </div>
    );
}

export default QuoteContainer