import React from 'react';
import {Link} from "next/link"

const PopularList = ({data}) => {
    return (
        <div>
            <div className="p-1">

                        {
                        data.map((value,index)=>{
                        return(
                        <Link href={`/details?id=${value.id}`} key={value}> 
                                
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
    );
};

export default PopularList;