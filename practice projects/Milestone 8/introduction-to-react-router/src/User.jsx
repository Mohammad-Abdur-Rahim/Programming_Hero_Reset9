import { useLoaderData } from "react-router-dom";
import UserOutput from "./UserOutput";
import './Users.css';


const User = () => {

    const  users = useLoaderData();
    return (
        <div>
            <h2>User List {users.length} </h2>
           <div className="user">
            {

                users.map((data)=><UserOutput key={data.id}  user={data}></UserOutput>)
            }
           </div>
        </div>
    );
};

export default User;