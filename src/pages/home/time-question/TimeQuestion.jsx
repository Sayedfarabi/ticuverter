import React from 'react';
import { Link } from 'react-router-dom';

const TimeQuestion = () => {
    return (
        <section className='mx-2 md:mx-4 py-8'>
            <h4 className='text-2xl font-bold'>
                How Can You Use Our Time Converter Tool?
            </h4>
            <div className='my-3'>
                <p className='text-lg text-gray-500'>
                    A Global Time Zone Converter lets you compare different countries' time zones with any individual country. You can convert, compare, and check a country's time zone with your own and know the time. You can compare multiple cities in your selected country to know the gap between the different time zones simultaneously. The Global Time Converter allows you to compare your custom time and date with the time and date in other countries and cities. All in all, It is a time zone converter to convert and compare the global time. To use this time converter tool, follow the given steps below.
                </p>
            </div>
            <p className='text-lg font-semibold my-1'>
                Step #1: <span className='font-normal text-gray-500'>
                    Select your country option.
                </span>
            </p>
            <p className='text-lg font-semibold my-1 text-gray-500'>
                Step #2: <span className='font-normal'>
                    Select the country that you want to compare with.
                </span>
            </p>
            <p className='text-lg font-semibold my-1 text-gray-500'>
                Step #3: <span className='font-normal'>
                    lick <span className='text-blue-500 underline'><Link to={"/time-converter"}>convert</Link></span> .
                </span>
            </p>
        </section>
    );
};

export default TimeQuestion;