import React from 'react';
import timeImage from "../../../assets/images/conveter-linked/timezone.png"
import currencyImage from "../../../assets/images/conveter-linked/currency.png"
import { Link } from 'react-router-dom';

const ConverterLinked = () => {
    return (
        <section className='py-12'>
            <div className='flex-none md:flex justify-center items-center'>
                <div className='my-4 md:mx-4'>
                    <div>
                        <Link to={"/time-converter"}>
                            <div>
                                <div className='h-20 w-48 mx-auto'>
                                    <img className='h-20 w-48' src={timeImage} alt="" />
                                </div>
                                {/* <div>
                                    <h1 className='text-center text-2xl'>Time Converter</h1>
                                </div> */}
                            </div>
                        </Link>
                    </div>
                </div>
                <div className=' md:mx-4'>
                    <div >
                        <Link to={"/currency-converter"}>
                            <div className='h-20 w-48 mx-auto'>
                                <img src={currencyImage} alt="" />
                            </div>
                            {/* <div>
                                <h1 className='text-center text-2xl'>Currency Converter</h1>
                            </div> */}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConverterLinked;