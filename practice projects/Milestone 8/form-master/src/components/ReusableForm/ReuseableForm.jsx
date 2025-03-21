const ReuseableForm = ({ formTitle, submitBtn, handleSubmit }) => {
  const localSubmitData = (e) => {
    e.preventDefault();
    // Object Data Receive
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
    handleSubmit(data);
  };
  return (
    <div>
      <h2>{formTitle}</h2>
      <form onSubmit={localSubmitData}>
        <input type="text" name="name" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="password" name="password" id="" /> <br />
        <input type="submit" value={submitBtn} />
      </form>
    </div>
  );
};

export default ReuseableForm;
