import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, "\n", email);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Name"
        />{" "}
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="Email"
          id=""
        />{" "}
        <br />
        <input type="phone" name="phone" placeholder="Phone" id="" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StateFullForm;
