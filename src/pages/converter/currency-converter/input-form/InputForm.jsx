import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addToCurrencies, addToCurrency } from '../../../../redux/action-creators/currencyAction';
import { addToCurrencyCountry } from '../../../../redux/action-creators/currencyCountryAction';


const InputForm = () => {
    const { register, handleSubmit } = useForm();
    const currency = useSelector((state) => state?.currency?.currency)
    const codes = useSelector((state) => state?.currency?.codes)
    // console.log(codes);
    const dispatch = useDispatch();
    // const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;
    // const rapidApiHost = process.env.REACT_APP_RAPID_API_HOST;
    const currencyHandler = data => {



        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': "bbe5cd45bbmsh7937d9d54ccf9f1p1680a5jsn63da4c72f4e6",
                'X-RapidAPI-Host': "currency-converter-by-api-ninjas.p.rapidapi.com"
            }
        };

        fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${data?.oldCurrency}&want=${data?.newCurrency}&amount=${data?.amount}`, options)
            .then(response => response.json())
            .then(response => {
                response.differenceOld = (response?.old_amount / response?.new_amount).toFixed(4);
                response.differenceNew = (response?.new_amount / response?.old_amount).toFixed(4);
                if (response?.new_amount) {
                    dispatch(addToCurrencies(response))
                    dispatch(addToCurrency(response))
                    fetch(`https://restcountries.com/v3.1/currency/${data?.newCurrency}`)
                        .then(res => res.json())
                        .then(country => {
                            const currentData = country[0];
                            dispatch(addToCurrencyCountry(currentData))
                        })
                } else {
                    return
                }

            })
            .catch(err => console.error(err));

    }





    return (
        <div className='w-full mx-auto border-2 min-h-[400px]'>
            <div className='text-3xl md:text-4xl font-semibold my-2'>
                <h1 className='mb-4 ml-2'> Currency Converter :</h1>
                <hr />
            </div>
            <div>
                <div className='py-2 bg-black'>
                    <form onSubmit={handleSubmit(currencyHandler)}>
                        <div className='px-4 flex-none md:flex justify-start items-center'>
                            <div>
                                <div className='flex my-2'>
                                    <div>
                                        <input {...register("amount", { required: true })} type="number" name="amount" className='border-2 border-blue-400 w-40 md:w-60 py-2 text-center' placeholder='Enter Your Amount' />
                                    </div>
                                    <div>

                                        <select {...register("oldCurrency", { required: true })} name="oldCurrency" className='border-2 border-blue-400 w-20 md:w-32 py-2 max-h-96' required>
                                            <option value={""}>Select One</option>
                                            {codes?.map(currency => {
                                                return <option
                                                    key={currency?._id}
                                                    value={currency?.code}
                                                >{currency?.name}
                                                </option>
                                            })}

                                        </select>
                                    </div>
                                </div>
                                <div className=' text-center '>
                                    <p>TO</p>
                                </div>
                                <div className='flex my-2'>
                                    <div>

                                        <select {...register("newCurrency", { required: true })} name="newCurrency" className='border-2 border-blue-400 w-[240px] md:w-[368px] py-2'>
                                            <option value={""}>Select One</option>
                                            {codes?.map(currency => {
                                                return <option
                                                    key={currency?._id}
                                                    value={currency?.code}
                                                >{currency?.name}
                                                </option>
                                            })}
                                        </select>
                                    </div>

                                </div>
                            </div>

                            <div className='mx-4 md:mx-6 text-center'>
                                <input className='btn bg-blue-500 text-white' type="submit" value="Convert" />
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <div className='ml-4'>
                        <div className='my-12'>
                            <div className='text-center text-gray-500'>
                                {
                                    !currency &&
                                    <p>Start by provide your value and selecting from your currency to select expected currency in the select box above</p>
                                }
                            </div>
                            <div>
                                <div>
                                    {
                                        currency?.new_amount &&
                                        <div className='text-lg md:text-xl'>

                                            <p className='font-semibold'>Currency : <span className='text-blue-600 font-normal'>{currency?.new_currency}</span></p>

                                            <p className='font-semibold'>Amount : <span className='text-blue-600 font-normal'>{currency?.new_amount}</span></p>

                                            <p className='font-semibold'>Difference (Per <span className='text-blue-600 font-normal'>{currency?.new_currency}</span> ) : <span className='text-blue-600 font-normal'>{currency?.differenceOld} {currency?.old_currency}</span></p>

                                            <p className='font-semibold'> Difference (Per <span className='text-blue-600 font-normal'>{currency?.old_currency}</span> ) : <span className='text-blue-600 font-normal'>{currency?.differenceNew} {currency?.new_currency}</span> </p>
                                        </div>
                                    }
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default InputForm;