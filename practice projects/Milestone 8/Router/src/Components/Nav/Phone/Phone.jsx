import { useEffect, useState } from "react";

const Phone = () => {
    const [phone,setPhone]=useState([]);

useEffect(()=>{


    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res => res.json())
    .then(data => setPhone(data.data))









    
},[])

    return (
        <div>
            <h2 className="text-5xl">Phone : {phone.length}</h2>
        </div>
    );
};

export default Phone;