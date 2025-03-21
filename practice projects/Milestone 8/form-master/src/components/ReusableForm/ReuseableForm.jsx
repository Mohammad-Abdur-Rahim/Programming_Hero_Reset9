
const ReuseableForm = ({formTitle }) => {
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    return (
        <div>
            <h2>{formTitle}</h2>
             <form onSubmit={handleSubmit}>
        <input type="text" name="name" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="phone" name="phone" id="" /> <br />
        <input type="submit" value="Submit" />
      </form>
        </div>
    );
};

export default ReuseableForm;