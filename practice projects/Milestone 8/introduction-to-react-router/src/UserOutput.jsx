import { Link } from "react-router-dom";


const UserOutput = ({user}) => {
    const{id,name,email,phone}=user;
    const userStyle ={
border : "2px solid red",
padding : "10px",
boderRadius : "10px"
    };
    return (
        <div style={userStyle}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
           <Link to={`/userDetails/${id}`}>Show Details</Link>
        </div>
    );
};

export default UserOutput;