import "./App.css";
import HookForm from "./components/HookForm/HookForm";
import RefForm from "./components/RefForm";
import ReuseableForm from "./components/ReusableForm/ReuseableForm";
import SimpleForm from "./components/SimpleForm";
import StateFullForm from "./components/StateFullForm";

function App() {
  const handleSingUpSubmit = (data) => {
    console.log("singUp : ", data);
  }
  const handleUpdate = (data) => {
    console.log("Update : ", data);
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm
        formTitle={"Sing Up"}
        handleSubmit={handleSingUpSubmit}
      ></ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        submitBtn="Update"
        handleSubmit={handleUpdate}
      ></ReuseableForm>
    </>
  );
}

export default App;
