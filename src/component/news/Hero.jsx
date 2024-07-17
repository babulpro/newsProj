 
import Link from 'next/link';
import React from 'react';

const Hero = ({data}) => {
    return (
         <div className='mt-10 w-full m-auto clear-both'>
          <div className='p-1 md:grid md:grid-cols-2 w-full min-h-64 gap-3 hidden  shadow-2xl'>

            {
              data.map((value,index)=>{
                return(
                 index <= 1 && <Link href={`/details?id=${value.id}`} key={value}> 
                       
                 <div className=" shadow-2xl w-full min-h-64">
                       <img className='w-full h-64 p-10' src={`${value.img1}`}/>
                             
                  </div>
      
                             
       
     </Link>
                )
              })
            }

          </div>

          


         </div>
    );
};

export default Hero;