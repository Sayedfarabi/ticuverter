import React from 'react';

const CurrencyInput = () => {
    return (
        <section className='my-2'>
            <div className='mx-4'>
                <form>
                    <div className='flex justify-center items-center'>
                        <div>
                            <input className=' border-2 py-2 w-60 md:w-96' type="text" name="" id="" />
                        </div>
                        <div>
                            <input className='btn bg-orange-500 text-white hover:bg-black' type="submit" value="Search" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CurrencyInput;