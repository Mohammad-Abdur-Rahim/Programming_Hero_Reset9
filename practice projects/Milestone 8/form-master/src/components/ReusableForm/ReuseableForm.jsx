
const ReuseableForm = ({formTitle ,submitBtn ,handleSubmit }) => {
   
    return (
        <div>
            <h2>{formTitle}</h2>
             <form onSubmit={handleSubmit}>
        <input type="text" name="name" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="password" name="password" id="" /> <br />
        <input type="submit" value={submitBtn} />
      </form>
        </div>
    );
};

export default ReuseableForm;