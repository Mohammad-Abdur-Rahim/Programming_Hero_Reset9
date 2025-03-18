import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostOutput = () => {
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }
    const post =useLoaderData();
    const{id,title,body} =post;
    return (
        <div>
            <h2>post Details :</h2>
            <h2>{id}</h2>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostOutput;