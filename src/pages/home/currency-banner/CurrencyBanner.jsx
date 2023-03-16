import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../assets/images/currency-banner/currency-banner.png';

const CurrencyBanner = () => {
    return (
        <section className='py-12 md:py-16'>
            <div className='flex flex-col-reverse md:flex-row justify-evenly items-center'>
                <div className='flex justify-start md:justify-center items-center'>
                    <div className=' mx-auto'>
                        <div>
                            <img className=' w-96' src={bannerImage} alt="Banner" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end md:justify-center items-center'>
                    <div className='w-full mx-4 md:mx-0 md:1/2' >
                        <div className='mb-4 md:mb-8'>
                            <h1 className='text-4xl'>Currency Converter</h1>
                        </div>
                        <div className='mb-4 md:mb-8'>
                            <div className='mb-4'>
                                <p>
                                    To get started use the button billow an select Country to convert currency
                                </p>
                            </div>
                            <div className='w-2/3 md:w-1/2 border-2 h-16 bg-gray-300 flex justify-center items-center text-2xl'>
                                <div>
                                    <p>1 USD = 0.94 EUR</p>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <Link to={"/currency-converter"}>
                                    <button className='capitalize btn bg-orange-500 text-white w-40'>
                                        Get Start
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* bg-gradient-to-r from-orange-50 to-[#ffa6af] */}
        </section>
    );
};

export default CurrencyBanner;