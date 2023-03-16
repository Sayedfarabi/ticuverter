import React from 'react';
import { useDispatch } from 'react-redux';
import { addToTime } from '../../../../redux/action-creators/time-actions/TimeActions';

const RecentTimeAction = ({ time }) => {
    const dispatch = useDispatch()

    const timeHandler = (time) => {
        const timeData = time?.time;
        dispatch(addToTime(timeData))
    }
    return (
        <div className='text-center text-md md:text-lg my-1 mx-auto'>
            <button onClick={() => timeHandler(time)} className='text-blue-500 underline'>{time.timezone}</button>
        </div>
    );
};

export default RecentTimeAction;