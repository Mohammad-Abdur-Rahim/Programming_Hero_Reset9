
import "./App.css";
import LineChart from "./Components/Nav/Chart/LineChart";
import CustomNav from "./Components/Nav/CustomNav";
import PriceOption from "./Components/Nav/PriceOption";

const App = () => {
  return (
    <div>
      <CustomNav></CustomNav>
      {/* <h2 className='text-5xl'>React</h2> */}
      <PriceOption></PriceOption>
      <LineChart></LineChart>
    </div>
  );
};

export default App;
