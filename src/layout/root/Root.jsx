import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { addToCountries } from '../../redux/action-creators/countriesAction';
import { addToCodes } from '../../redux/action-creators/currencyAction';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const Root = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("currencyCodes.json")
            .then(res => res.json())
            .then(codes => dispatch(addToCodes(codes)))
    }, [dispatch])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(countries => dispatch(addToCountries(countries)))
    }, [dispatch])


    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[80vh]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;