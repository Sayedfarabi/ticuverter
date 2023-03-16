import React from 'react';
import { useSelector } from 'react-redux';
import CurrencyCountry from './currency-country/CurrencyCountry';
import InputForm from './input-form/InputForm';
import RecentCurrencyAction from './recent-currency-action/RecentCurrencyAction';


const CurrencyConverter = () => {

    const country = useSelector(state => state?.currency?.country)
    const currencies = useSelector(state => state?.currency?.currencies)
    // const country = state?.country;
    // console.log(country);

    return (
        <div className='px-4 md:px-8 bg-gradient-to-r from-orange-50 to-[#ffa6af] min-h-[80vh]'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
                <div className='md:col-span-4 my-4'>

                    <div>
                        <InputForm></InputForm>
                    </div>
                    <div className='my-6'>
                        {
                            country &&
                            <CurrencyCountry
                                country={country}>
                            </CurrencyCountry>
                        }
                    </div>
                </div>
                {
                    (currencies.length > 0) &&
                    <div className='my-8 md:col-span-1'>
                        <h2 className='text-2xl font-semibold'>Recent Action :</h2>
                        <div className='grid grid-cols-4 md:grid-cols-1 gap-2'>
                            {
                                currencies &&
                                currencies.sort((a, b) => b?.currencyPosition - a.currencyPosition).map(currency => {
                                    return <RecentCurrencyAction
                                        key={currency?.position}
                                        data={currency}>
                                    </RecentCurrencyAction>
                                })

                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default CurrencyConverter;