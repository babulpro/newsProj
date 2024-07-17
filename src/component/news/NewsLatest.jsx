 

import Link from 'next/link';
import React from 'react';
 

const NewsLatest = ({data}) => {
    return (
      <div>
      <h1 className="text-red-600 ml-5 mt-5 text-center underline text-2xl ">Latest News</h1>

              <div className="grid grid-cols-1 md:grid-cols-5 p-2 shadow-2xl ">
                  <div className="md:col-span-4 ">
                              
                            <div className='p-1 grid w-full px-5 m-auto md:grid-cols-2 gap-3  shadow-2xl'>

                                  {
                                    data['country'].map((value,index)=>{
                                      return(
                                        index<8 && <Link href={`/details?id=${value.id}`} key={value}> 
                                            
                                      <div className=" shadow-2xl w-full p-3 min-h-80">
                                            <h1 className='text-red-700 capitalize underline mt-4'>{value.title}</h1>
                                            <p className="mt-2 ">{value.short_des}</p>
                                            <img className='w-full h-80 p-10 rounded-md' src={`${value.img1}`}/>
                                                  
                                        </div>

                                                  

                                  </Link>
                                      )
                                    })
                                  }

                            </div>
            
                  </div>

                  <div  className="p-2">
                    <h2 className='text-red-600 ml-5 mt-5 text-center underline text-md'>Popular News</h2>
              
                                    <div className="p-1">

                                          {
                                          
                                          data['social'].map((value,index)=>{
                                            return(
                                              index<5 &&<Link href={`/details?id=${value.id}`} key={value}> 
                                                  
                                            <div className=" shadow-2xl w-full mb-2 p-5 ">
                                                  <p className='text-red-700 capitalize underline mt-4 text-xs'>{value.title}</p>
                                                  
                                                  <img className='w-full rounded-sm p-4' src={`${value.img1}`}/>
                                                        
                                              </div>

                                                        

                                        </Link>
                                            )
                                          })
                                        }
                                      
                                    
                                    </div>
                                    
              

                  </div>

              </div>




              <h1 className="text-red-600 ml-5 mt-5 text-center underline text-2xl">Worlds News</h1>

              <div className="grid grid-cols-1 md:grid-cols-5 p-2 shadow-2xl ">
                  <div className="md:col-span-4 ">
                                    
                              
                            <div className='p-1 grid w-full px-5 m-auto md:grid-cols-2 gap-3  shadow-2xl'>

                                  {
                                    data['social'].map((value,index)=>{
                                      return(
                                        index<8 && <Link href={`/details?id=${value.id}`} key={value}> 
                                            
                                      <div className=" shadow-2xl w-full p-3 min-h-80">
                                            <h1 className='text-red-700 capitalize underline mt-4'>{value.title}</h1>
                                            <p className="mt-2 ">{value.short_des}</p>
                                            <img className='w-full h-80 p-10 rounded-md' src={`${value.img1}`}/>
                                                  
                                        </div>

                                                  

                                  </Link>
                                      )
                                    })
                                  }

                            </div>
            
                  </div>

                  <div  className="p-2">
                    <h2 className='text-red-600 ml-5 mt-5 text-center underline text-md'>Popular News</h2>
              
                                    <div className="p-1">

                                          {
                                          data['country'].map((value,index)=>{
                                             return(

                                              
                                              index<5 &&<Link href={`/details?id=${value.id}`} key={value}> 
                                                    
                                              <div className=" shadow-2xl w-full mb-2 p-5 ">
                                                    <p className='text-red-700 capitalize underline mt-4 text-xs'>{value.title}</p>
                                                    
                                                    <img className='w-full rounded-sm p-4' src={`${value.img1}`}/>
                                                          
                                                </div>
  
                                                          
  
                                          </Link>
                                              )
                                            })
                                        }
                                      
                                     
                                    </div>
              

                  </div>

              </div>
      </div>
    );
};

export default NewsLatest;