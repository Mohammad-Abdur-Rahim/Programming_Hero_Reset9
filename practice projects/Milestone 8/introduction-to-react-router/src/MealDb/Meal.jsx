import { Link, useNavigate } from "react-router-dom";


const Meal = ({meals}) => {
    const{strMeal,strArea,strMealThumb,strInstructions,idMeal}=meals;
    const navigate = useNavigate();

    const handleNavigate =()=>{
        navigate(`/meal/${idMeal}`);
    }

    const mealStyle ={
        border : "2px solid yellow",
        padding : "10px",
        borderRadius : "20px"
            };
    return (

        
        <div style={mealStyle}>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <h3>{strArea}</h3>
            <p>{strInstructions}</p>
            <Link to={`/meal/${idMeal}`}><button>Post Details</button></Link>
            <button onClick={handleNavigate}>Details</button>
        </div>
    );
};

export default Meal;