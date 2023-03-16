import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Timer = () => {
    const [time, setTime] = useState({ hour: 0, min: 0, sec: 10, miliSec: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const { register, handleSubmit } = useForm();

    let updateMs = time?.miliSec, updateS = time?.sec, updateM = time?.min, updateH = time?.hour;
    console.log(time);
    // { ms: 0, s: 0, m: 0, h: 0 }
    const hourHandle = e => {
        const hourStr = e.target.value;
        const hour = parseInt(hourStr)
        setTime(time.h = hour)
        console.log(time);
    }

    const minHandler = e => {
        const minStr = e.target.value;
        const min = parseInt(minStr);
        setTime(time.m = min)
        console.log(time);
    }

    const secHandler = e => {
        const secStr = e.target.value;
        const sec = parseInt(secStr)
        setTime(time.s = sec)
        console.log(time);
    }

    const miliSecHandler = e => {
        const miliSecStr = e.target.value;
        const miliSec = parseInt(miliSecStr)

        setTime(time.ms = miliSec)
        console.log(time);
    }

    const start = (data) => {
        const hour = parseInt(data.hour);
        const min = parseInt(data.min)
        const sec = parseInt(data.sec)
        const miliSec = parseInt(data.miliSec)

        const timeData = {
            hour,
            min,
            sec,
            miliSec
        }
        setTime(timeData)
        run()
        setInterv(setInterval(run, 10))
        setStatus(1)

    }

    const stop = () => {
        clearInterval(interv)
        setStatus(2)
    }

    const resume = () => {
        start()
    }

    const reset = () => {
        clearInterval(interv)
        setTime({ miliSec: 0, sec: 0, min: 0, hour: 0 })
        setStatus(0)
    }

    const run = () => {
        if (updateMs > 0) {
            updateMs--
        }
        if ((updateS > 0)) {
            updateMs = 100
            updateS--
        }
        if (updateM > 0) {
            updateM--
            updateS = 59
        }
        if (updateH > 0) {
            updateH--
            updateM = 59
        }
        updateMs--
        return setTime({ miliSec: updateMs, sec: updateS, min: updateM, hour: updateH })
    }

    return (
        <section>
            <div>
                <div className='mb-2'>
                    <h2 className='text-2xl text-center font-semibold'>STOP WATCH</h2>
                </div>
                <form onSubmit={handleSubmit(start)}>
                    <div className=' w-60 h-24 bg-gray-200 border flex justify-center items-center  mx-auto mb-2 text-3xl font-bold my-4'>
                        <div className='flex justify-center items-center w-full'>
                            <div>
                                <input {...register("hour")} className='w-16 text-center bg-blue-300 h-16 border' type="number" name="hour" id="hour" defaultValue={time?.hour} />
                            </div>
                            &nbsp;:&nbsp;
                            <div>
                                <input {...register("min")} className='w-16 text-center bg-blue-300 h-16 border' type="number" name="min" id="min" defaultValue={time?.min} />
                            </div>
                            &nbsp;:&nbsp;
                            <div>
                                <input {...register("sec")} className='w-16 text-center bg-blue-300 h-16 border' type="number" name="sec" id="sec" defaultValue={time?.sec} />
                            </div>
                            &nbsp;:&nbsp;
                            <div>
                                <input {...register("miliSec")} className='w-16 text-center bg-blue-300 h-16 border' type="number" name="miliSec" id="miliSec" defaultValue={time?.miliSec} />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center my-4'>
                        {
                            (status === 0) &&
                            <div className='text-center mx-1'>
                                <input type="submit" value="Start" className='btn btn-sm bg-green-300 text-blue-500' />
                            </div>
                        }
                        {
                            (status === 1) &&
                            <div className='flex justify-center items-center my-4'>
                                <div className='text-center mx-1'>
                                    <button onClick={() => stop()} className='btn btn-sm bg-black text-white'>Stop</button>
                                </div>
                                <div className='text-center mx-1'>
                                    <button onClick={() => reset()} className='btn btn-sm bg-red-400 text-white'>Reset</button>
                                </div>
                            </div>
                        }
                        {
                            (status === 2) &&
                            <div className='flex justify-center items-center my-4'>
                                <div className='text-center mx-1'>
                                    <button onClick={() => resume()} className='btn btn-sm bg-yellow-300 text-black'>Resume</button>
                                </div>
                                <div className='text-center mx-1'>
                                    <button onClick={() => reset()} className='btn btn-sm bg-red-400 text-white'>Reset</button>
                                </div>
                            </div>
                        }

                    </div>
                </form>
            </div>
        </section>
    );
};

export default Timer;