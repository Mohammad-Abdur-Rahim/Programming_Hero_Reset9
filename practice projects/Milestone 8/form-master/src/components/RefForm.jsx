import { useEffect, useRef } from "react";

const RefForm = () => {

const nameRef =useRef(null);
const emailRef =useRef(null);
const phoneRef =useRef(null);
//2nd Cursor Point 

useEffect(()=>{
    nameRef.current.focus();
},[])


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" placeholder="Name" /> <br />
        <input ref={emailRef} type="email" name="email" id="" placeholder="Email" /> <br />
        <input ref={phoneRef} type="phone" name="phone" id="" placeholder="Phone" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
