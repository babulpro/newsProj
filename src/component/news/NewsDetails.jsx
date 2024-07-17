import React from 'react';

async function getData(id){
    let res = (await(await fetch(`${process.env.BASE_URL}/api/news/details?id=${id}`,{ cache: 'no-store' })).json())['data']
     
    return res
  } 
  

const NewsDetails = async({data}) => {
    let result = await getData(data)

    return (
        <div className='w-2/3 m-auto p-5'>
            <h1 className='underline text-red-600'>{result.title}</h1>
            <h6 className="text-red-500">{result.short_des}</h6>
            <div className="px-5 grid md:grid-cols-3 gap-3 my-5">
                <div className="border h-36">
                    {result.img1}
                </div>
                <div className="border h-36">
                    {result.img2}
                </div>
                <div className="border h-36">
                    {result.img3}
                </div>


            </div>
            <p className="text-red-700">{result.long_des}</p>
             
        </div>
    );
};

export default NewsDetails;