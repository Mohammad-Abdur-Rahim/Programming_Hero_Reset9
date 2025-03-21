
import './App.css'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm'
import ReuseableForm from './components/ReusableForm/ReuseableForm'
import SimpleForm from './components/SimpleForm'
import StateFullForm from './components/StateFullForm'

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm formTitle={'Sing Up'}></ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'}></ReuseableForm>
     
      
    </>
  )
}

export default App
