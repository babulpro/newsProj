 
 
 
import NewsLatest from '@/component/news/NewsLatest';
 
import React from 'react';

async function getData(id){
    let social = (await(await fetch(`${process.env.BASE_URL}/api/news/category?id=${id}`,{ cache: 'no-store' })).json())['data']
    let country = (await(await fetch(`${process.env.BASE_URL}/api/news/category?id=${id}`,{ cache: 'no-store' })).json())['data']
     
    return {
      social,country
    }
  } 
  
const Page = async (props) => {
    let myId =props.searchParams['id']
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