import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addToTime, addToTimes } from '../../../../redux/action-creators/time-actions/TimeActions';
import { timezones } from './timeZones';

const TimeInputForm = () => {
    const { register, handleSubmit } = useForm();

    const targetTime = useSelector(state => state?.time?.time);
    const dispatch = useDispatch();
    const timeHandler = data => {
        console.log(data);
        const tz = data?.timezone;
        const targetTime = new Date().toLocaleTimeString("en-us", { timeZone: tz, timeZoneName: "short" })
        const recentData = {
            timezone: tz,
            time: targetTime
        }
        dispatch(addToTime(targetTime))
        dispatch(addToTimes(recentData))
    }
    return (
        <div>
            <div className='w-full mx-auto border-2 min-h-[400px]'>
                <div className='text-3xl md:text-4xl font-semibold my-2'>
                    <h1 className='mb-4 ml-2'> Time Converter :</h1>
                    <hr />
                </div>
                <div>
                    <div className='py-2 bg-black'>
                        <form onSubmit={handleSubmit(timeHandler)}>
                            <div className='px-4 flex-none md:flex justify-start items-center'>
                                <div>
                                    <div className='flex my-2'>
                                        <div>

                                            <select {...register("timezone", { required: true })} name="timezone" className='border-2 border-blue-400 w-[240px] md:w-[368px] py-2'>
                                                <option value={""}>Select One</option>
                                                {timezones?.map(timezone => {
                                                    return <option
                                                        key={timezone}
                                                        value={
                                                            timezone
                                                        }
                                                    >
                                                        {timezone}
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
                        <div className=''>
                            <div className='my-12'>
                                <div className='text-center text-gray-500'>
                                    {
                                        !targetTime &&
                                        <p>Start by provide your value and selecting from your currency to select expected currency in the select box above</p>
                                    }
                                </div>
                                <div>

                                    {
                                        targetTime &&
                                        <div className=' h-32 w-4/5 mx-auto border flex justify-center items-center bg-lime-200'>
                                            <div className='text-center text-xl text-blue-500'>
                                                <p className='text-3xl text-gray-500 my-2'>Your Target Time and Time zone is :</p>
                                                <p className='text-2xl'>{targetTime}</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default TimeInputForm;