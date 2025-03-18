import { Link, useNavigate } from "react-router-dom";

const Post = ({postData}) => {
    const navigate = useNavigate();
    const handleShowDetails = ()=>{
        navigate(`/post/${id}`);
    }
    const userStyle ={
        border : "2px solid yellow",
        padding : "10px",
        borderRadius : "20px"
            };
    const {id,title} = postData;
    return (
        <div style={userStyle}>
            <h2> {id}</h2>                       
            <h2> {title}</h2>      
            <Link to={`/post/${id}`}> <button>Post Details</button></Link>  
            <button onClick={handleShowDetails}>Show Details</button>               
         
        </div>
    );
};

export default Post;