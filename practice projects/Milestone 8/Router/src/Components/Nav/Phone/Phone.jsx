import axios from "axios";
import { useEffect, useState } from "react";

const Phone = () => {
    const [phone,setPhone]=useState([]);

useEffect(()=>{


    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data =>setPhone(data.data.data))



    
},[]);

    return (
        <div>
            <h2 className="text-5xl">Phone : {phone.length}</h2>
        </div>
    );
};

export default Phone;