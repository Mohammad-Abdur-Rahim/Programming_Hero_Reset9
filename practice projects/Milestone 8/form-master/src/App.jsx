import "./App.css";
import HookForm from "./components/HookForm/HookForm";
import RefForm from "./components/RefForm";
import ReuseableForm from "./components/ReusableForm/ReuseableForm";
import SimpleForm from "./components/SimpleForm";
import StateFullForm from "./components/StateFullForm";

function App() {
  const handleSingUpSubmit = (e) => {
    e.preventDefault();
  };
  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm
        formTitle={"Sing Up"}
        handleSingUpSubmit={handleSingUpSubmit}
      ></ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        submitBtn="Update"
        handleUpdate={handleUpdate}
      ></ReuseableForm>
    </>
  );
}

export default App;
