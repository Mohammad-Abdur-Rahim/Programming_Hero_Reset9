import { useLoaderData } from "react-router-dom";


const MealOutput = () => {
    const meals = useLoaderData();
    const{strMeal,strArea,strMealThumb,strInstructions}=meals;
    console.log(meals);
    return (
        <div>
           <div >
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <h3>{strArea}</h3>
            <p>{strInstructions}</p>
            
        </div>
        </div>
    );
};

export default MealOutput;