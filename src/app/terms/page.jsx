import React from 'react';


async function getData(){
    let data = (await(await fetch(`${process.env.BASE_URL}/api/policy?type=privacy`,{ cache: 'no-store' })).json())['data']

    return data
}

const Page = async () => {
    let data = await  getData();

    return (
        <div className="mt-10 p-10">

                 {
                    data.map((item, index) =>(
                        <h1 className="mt-4 p-2 py-8 shadow-2xl">
                            {item["lonf_des"]}
                        </h1>
                    ))
                 }

        </div>
    );
};

export default Page;