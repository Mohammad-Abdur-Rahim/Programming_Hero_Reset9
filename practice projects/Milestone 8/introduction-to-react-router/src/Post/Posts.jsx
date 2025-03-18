import { useLoaderData } from "react-router-dom";
import Post from "./Post";


const Posts = () => {
    const posts = useLoaderData();
   
    return (
        <div>
            <h2>Posts :{posts.length}</h2>
         
            <div className="user">
                {
                   posts.map(d=> <Post key={d.id} postData={d}></Post>) 
                }
            </div>
        </div>
    );
};

export default Posts;