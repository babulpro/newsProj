import React from 'react';
import AppnavBar from './AppnavBar';
import Footer from './Footer';
import {cookies} from "next/headers";


async function getData(){
    let social = (await(await fetch(`${process.env.BASE_URL}/api/social`,{ cache: 'no-store' })).json())['data']
    let category = (await(await fetch(`${process.env.BASE_URL}/api/category`,{ cache: 'no-store' })).json())['data']
    return {social,category}
}

const PlainLayout = async(props) => {



    let  myCookies = cookies();
    let myToken = myCookies.get('token')

    const isToken = myToken === undefined ? false : true;




    let mdata = await getData()

    return (
        <>
            <AppnavBar data={mdata} isToken={isToken}/>
                 {props.children}

            <Footer data={mdata}/>
            
        </>
    );
};

export default PlainLayout;