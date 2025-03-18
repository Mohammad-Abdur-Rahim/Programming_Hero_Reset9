

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
        </div>
    );
};

export default UserOutput;