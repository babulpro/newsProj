import PlainLayout from '@/component/master/PlainLayout';
import Hero from '@/component/news/Hero';
import NewsLatest from '@/component/news/NewsLatest';
import NewsList from '@/component/news/NewsLatest';
import React from 'react';

async function getData(){
  let social = (await(await fetch(`${process.env.BASE_URL}/api/news/type?type=country`,{ cache: 'no-store' })).json())['data']
  let country = (await(await fetch(`${process.env.BASE_URL}/api/news/type?type=world`,{ cache: 'no-store' })).json())['data']
   
  return {
    social,country
  }
} 

 

const Page = async () => {
  let data = await getData()
  
  
  return (
    

      <div className="mt-16 mb-10"> 


      <Hero data={data.social}/> 
      <NewsLatest data={data}/>
      
    

      </div>

  
  );
};

export default Page;