import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";


const Meals = () => {
    const mealsData = useLoaderData();

    return (
        <div>
            <h2>Meals Componenets</h2>
            <h3>meals: {mealsData.meals.length}</h3>
            <div className="user">
                {
                   mealsData.meals.map((m,idx)=><Meal key={idx} meals={m}></Meal>) 
                }
            </div>
        </div>
    );
};

export default Meals;