import React from 'react';
import ContactMe from './contact-me/ContactMe';
import ConverterLinked from './converter-linked/ConverterLinked';
import CurrencyAbout from './currency-about/CurrencyAbout';
import CurrencyBanner from './currency-banner/CurrencyBanner';
import CurrencyInput from './currency-input/CurrencyInput';
import TimeBanner from './time-banner/TimeBanner';
import TimeInputSection from './time-input/TimeInputSection';
import TimeQuestion from './time-question/TimeQuestion';

const Home = () => {
    return (
        <div>
            <TimeBanner></TimeBanner>
            {/* <ConverterLinked></ConverterLinked> */}
            <TimeQuestion></TimeQuestion>
            <TimeInputSection></TimeInputSection>
            <div className='mt-8 md:mt-16'>
                <hr />
            </div>
            <CurrencyBanner></CurrencyBanner>
            <CurrencyAbout></CurrencyAbout>
            {/* <CurrencyInput></CurrencyInput> */}
            <ContactMe></ContactMe>


        </div>
    );
};

export default Home;