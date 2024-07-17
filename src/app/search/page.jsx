import React from 'react';
import NewsLatest from '@/component/news/NewsLatest';
 

async function getData(word){
    let country= (await(await fetch(`${process.env.BASE_URL}/api/news/search?keyword=${word}`,{ cache: 'no-store' })).json())['data']
     
    let social= (await(await fetch(`${process.env.BASE_URL}/api/news/search?keyword=${word}`,{ cache: 'no-store' })).json())['data']
     
     
    return {country,social}
     
  } 

  
const Page = async (props) => {
    let myId =props.searchParams['keyword']
    let data =  await getData(myId)
   
  
    
    return (
        <div className="mt-28">
            this is the category page
            <div className="mt- mb-10">
                 <NewsLatest data={data}/>
             </div>

        </div>
    );
};

export default Page;