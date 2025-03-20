import useInputState from "./useInputState";

const HookForm = () => {
//   const [name, handleNameChange] = useInputState("Rahim");
  const emailState = useInputState("d@gmail.com");

  const handleSubmit = (e) => {
    console.log("Hooked : ", emailState.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />{" "} */}
        <br />


        <input {...emailState} type="email" name="email" id="" /> <br />
        <input type="password" name="password" id="" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
