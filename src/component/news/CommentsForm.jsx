"use client"

import React, { useEffect, useState } from 'react';


const CommentsList = ({ postId }) => {


    const onDelete =async (id) => {



        let config= {method:"delete",body:JSON.stringify({comments_id:parseInt(id)})}
        try {
            const response =await fetch(`/api/comments/manage`,config)
            const result = await response.json();
            if(result.status){
                
                alert('ok')
            }


        } catch (error) {
            console.error('Error fetching comments:', error);
        }


    }
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/comments/manage', { cache: 'no-store' });
                const result = await response.json();

                const data = Array.isArray(result.data) ? result.data : [];
                setComments(data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, []);

    if (comments.length > 0) {
        return (
            <div className="px-10 ">
                {comments.map((value, index) => (
                    <div className="p-2 mb-4 shadow-2xl" key={index}>
                        <div className="py-10  ">
                            <h1>{value.description}</h1>
                            <div className="flex justify-end mt-8">
                                <button className="mr-5" onClick={() => setComments(value)}>Eidt</button>
                                <button onClick={() => onDelete(`${value['id']}`)}>delete {value.id}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div>
                This is comments form
                {postId}
            </div>
        );
    }
};

export default CommentsList;
