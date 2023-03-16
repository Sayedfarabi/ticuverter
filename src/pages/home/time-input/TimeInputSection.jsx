import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToTime, addToTimes } from '../../../redux/action-creators/time-actions/TimeActions';
import { timezones } from '../../converter/time-converter/time-input-form/timeZones';

const TimeInputSection = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();



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
        navigate("/time-converter")
    }

    return (
        <section className='my-2'>
            <div className='mx-4'>
                <form onSubmit={handleSubmit(timeHandler)}>
                    <div className='flex justify-center items-center'>

                        <select {...register("timezone", { required: true })} name="timezone" className='border-2 py-2 w-60 md:w-96'>
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
                        <div>
                            <input className='btn bg-orange-500 text-white hover:bg-black' type="submit" value="Search" />

                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default TimeInputSection;