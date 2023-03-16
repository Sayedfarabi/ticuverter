import React from 'react';
import { Link } from 'react-router-dom';

const CurrencyAbout = () => {
    return (
        <section className='mx-2 md:mx-4 my-12'>
            <div>
                <p className='text-2xl font-bold my-2'>
                    About the currency calculator
                </p>
                <hr />
            </div>
            <div className='text-gray-500 text-lg my-6'>
                <p className='my-4'>
                    Do you deal in shares in different currencies? Do you like to travel? Do you like to shop on foreign online shops? The currency calculator of Markets Insider is the ideal tool for you.
                </p>

                <p className='my-4'>
                    With the currency calculator, you can quickly and easily convert amounts between any currencies. In total, there are about 160 different currencies available on the currency calculator.
                </p>

                <p className='my-4'>
                    Once you select the base and target currencies from the list and enter the desired amount into the provided field, the currency calculator immediately gives you the result. Additionally, you can also choose whether to calculate the result based on the current exchange rate or the exchange rate on a certain date. This way, the Markets Insider currency calculator allows you to search for historical exchange rates. The result provided by the currency calculator is displayed in a clearly arranged table. Here, the currency calculator shows the opening and closing rate as well as the lowest and highest rates for the respective date.
                </p>
            </div>
            <div className='my-6'>
                <p className='text-lg font-semibold my-1'>
                    Step #1: <span className='font-normal'>
                        Select your country option.
                    </span>
                </p>
                <p className='text-lg font-semibold my-1'>
                    Step #2: <span className='font-normal'>
                        Select the country that you want to compare with.
                    </span>
                </p>
                <p className='text-lg font-semibold my-1'>
                    Step #3: <span className='font-normal'>
                        lick <span className='text-blue-500 underline'><Link to={"/currency-converter"}>Convert</Link></span>.
                    </span>
                </p>
            </div>
        </section>
    );
};

export default CurrencyAbout;