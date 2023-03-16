import React from 'react';
import { useSelector } from 'react-redux';
import RecentTimeAction from './recent-time-action/RecentTimeAction';
import StopWatch from './stop-watch/StopWatch';

import TimeInputForm from './time-input-form/TimeInputForm';


const TimeConverter = () => {

    const times = useSelector(state => state?.time?.times)

    return (
        <div className='px-4 md:px-8 bg-gradient-to-r from-orange-50 to-[#ffa6af]'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
                <div className='md:col-span-4 my-4'>

                    <div>
                        <TimeInputForm></TimeInputForm>
                    </div>


                    <div className='my-12'>
                        <div>
                            <div>
                                <StopWatch></StopWatch>
                            </div>
                        </div>

                    </div>
                </div>
                {
                    (times.length > 0) &&
                    <div className='my-8 md:col-span-1'>
                        <h2 className='text-2xl font-semibold'>Recent Action :</h2>
                        <div className='grid grid-cols-4 md:grid-cols-1 gap-2'>
                            {
                                times &&
                                times.sort((a, b) => b?.timePosition - a.timePosition).map(time => {
                                    return <RecentTimeAction
                                        key={time.time}
                                        time={time}></RecentTimeAction>
                                })

                            }
                        </div>
                    </div>
                }


            </div>


        </div>
    );
};

export default TimeConverter;