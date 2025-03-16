import "./App.css";
import CustomNav from "./Components/Nav/CustomNav";
import PriceOption from "./Components/Nav/PriceOption";

const App = () => {
  return (
    <div>
      <CustomNav></CustomNav>
      {/* <h2 className='text-5xl'>React</h2> */}
      <PriceOption></PriceOption>
    </div>
  );
};

export default App;
