import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCurrencies, addToCurrency } from '../../../../redux/action-creators/currencyAction';
import { addToCurrencyCountry } from '../../../../redux/action-creators/currencyCountryAction';

const RecentCurrencyAction = (data) => {
    const currencyData = data?.data;
    const dispatch = useDispatch()

    const currencyHandler = currencyData => {
        console.log(currencyData);
        dispatch(addToCurrency(currencyData))
        // dispatch(addToCurrencies(currencyData))
        fetch(`https://restcountries.com/v3.1/currency/${currencyData?.new_currency}`)
            .then(res => res.json())
            .then(country => {
                const currentData = country[0];
                dispatch(addToCurrencyCountry(currentData))
            })
    }

    return (
        <section className='my-2'>
            <div className='text-center'>
                <div>
                    <button onClick={() => currencyHandler(currencyData)} className='capitalize'>
                        <span className='text-blue-500 underline'>{currencyData?.old_currency}</span> To <span className='text-blue-500 underline'>{currencyData?.new_currency}</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RecentCurrencyAction;