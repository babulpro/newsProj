import Comments from "@/component/news/Comments";


async function getData(id){
    let social = (await(await fetch(`${process.env.BASE_URL}/api/news/details?id=${id}`,{ cache: 'no-store' })).json())['data']
 
    return social 
  } 
  

const Page =async(props) => {
     
 
    let myId =props.searchParams['id']
    let data = await getData(myId)
 
    
     
    return (
     
    
    
            <div className=" my-24 container">
                <div className="w- 1/2 m-auto  p-10">

                   <div className="w-1/2 m-auto p-3 shadow-2xl ">
                          <img className="rounded-md fit" src={data.img1}/>
                   </div>
                   <div className="  m-10 shadow-2xl text-justify">
                        <h2 className="underline text-red-600 capitalize mt-5 text-3xl">{data.title}</h2> 
                        <h3 className="text-red-500 mt-5">{data.short_des}</h3>
                        <p className="">{data.long_des}</p> 
                        <p className="my-5">{data.createdAt}</p>
                       <div className="pb-10 ">
                           <Comments postId ={myId} data={data.comments}/>

                       </div>

                   </div>



                </div>
             
            </div>
    
       
    
    );
};

export default Page;