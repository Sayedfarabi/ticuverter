import React from 'react';

const CurrencyCountry = ({ country }) => {
    const { area, capital, continents, flags, name, population, region, startOfWeek, subregion, timezones, maps } = country;
    return (
        <section className='min-h-[500px] border-2'>
            <h1 className='text-3xl md:text-4xl  font-semibold my-4 ml-2'>Country Information :</h1>
            <hr />
            <div className='flex-none md:flex justify-evenly items-center text-lg md:text-xl font-semibold'>
                <div className='mx-auto my-4'>

                    <p className='my-2'>Native Name : <span className='text-blue-500 font-normal'>{name?.official}</span></p>

                    <p className='my-2'>Country : <span className='text-blue-500 font-normal'>{name?.common}</span></p>

                    <p className='my-2'>Capital : <span className='text-blue-500 font-normal'>{capital[0]}</span></p>

                    <p className='my-2'>Region : <span className='text-blue-500 font-normal'>{region}</span></p>

                    <p className='my-2'>Sub Region : <span className='text-blue-500 font-normal'>{subregion}</span></p>

                    <p className='my-2'>Continents : <span className='text-blue-500 font-normal'>{continents[0]}</span></p>

                    <p className='my-2'>population : <span className='text-blue-500 font-normal'>{population}</span></p>

                    <p className='my-2'>Area : <span className='text-blue-500 font-normal'>{area}</span></p>

                    <p className='my-2'>Time Zone : <span className='text-blue-500 font-normal'>{timezones[0]}</span></p>

                    <p className='my-2'>Start of week : <span className='text-blue-500 font-normal'>{startOfWeek}</span></p>
                </div>
                <div className='mx-auto'>
                    <div className='my-4'>
                        <div>
                            <h1 className='my-2'>Flag :</h1>
                            <img className='h-32 w-60 border-2' src={flags?.png} alt="flag" />
                        </div>
                    </div>
                    {/* <div className='my-4'>
                        <div>
                            <h1 className='my-2'>Maps</h1>
                            <img className='h-52 w-52 border-2' src={maps?.googleMaps} alt="maps" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default CurrencyCountry;