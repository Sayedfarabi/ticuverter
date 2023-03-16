import React, { useState } from 'react';

const StopWatch = () => {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    let updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;
    const startHandler = () => {
        run()
        setInterv(setInterval(run, 10))
        setStatus(1)
    }

    const stopHandler = () => {
        clearInterval(interv)
        setStatus(2)
    }

    const resetHandler = () => {
        clearInterval(interv)
        setTime({ ms: 0, s: 0, m: 0, h: 0 })
        setStatus(0)
    }

    const resumeHandler = () => {
        startHandler()
    }
    const run = () => {
        if (updateM === 60) {
            updateH++
            updateM = 0
        }
        if (updateS === 60) {
            updateM++
            updateS = 0
        }
        if (updateMs === 100) {
            updateS++
            updateMs = 0
        }
        updateMs++
        return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH })
    }
    return (
        <section>
            <div>
                <div className='mb-2'>
                    <h2 className='text-2xl text-center font-semibold'>STOP WATCH</h2>
                </div>
                <div className=' w-60 h-24 bg-gray-200 border flex justify-center items-center  mx-auto mb-2 text-3xl font-bold my-4'>
                    <div>

                        <span className='py-2 px-4 border bg-blue-300'>{time.h >= 10 ? time.h : "0" + time.h}</span>&nbsp;:&nbsp;
                        <span className='py-2 px-4 border bg-blue-300'>{time.m >= 10 ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
                        <span className='py-2 px-4 border bg-blue-300'>{time.s >= 10 ? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
                        <span className='py-2 px-4 border bg-blue-300'>{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
                    </div>
                </div>
                <div className='flex justify-center items-center my-4'>
                    {
                        (status === 0) &&
                        <div className='text-center mx-1'>
                            <button onClick={() => startHandler()} className='btn btn-sm bg-green-300 text-blue-500'>Start</button>
                        </div>
                    }
                    {
                        (status === 1) &&
                        <div className='flex justify-center items-center my-4'>
                            <div className='text-center mx-1'>
                                <button onClick={() => stopHandler()} className='btn btn-sm bg-black text-white'>Stop</button>
                            </div>
                            <div className='text-center mx-1'>
                                <button onClick={() => resetHandler()} className='btn btn-sm bg-red-400 text-white'>Reset</button>
                            </div>
                        </div>
                    }
                    {
                        (status === 2) &&
                        <div className='flex justify-center items-center my-4'>
                            <div className='text-center mx-1'>
                                <button onClick={() => resumeHandler()} className='btn btn-sm bg-yellow-300 text-black'>Resume</button>
                            </div>
                            <div className='text-center mx-1'>
                                <button onClick={() => resetHandler()} className='btn btn-sm bg-red-400 text-white'>Reset</button>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </section>
    );
};

export default StopWatch;