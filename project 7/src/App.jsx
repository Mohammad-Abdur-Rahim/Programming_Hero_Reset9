import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Players from "./components/Players/Players";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const App = () => {

  const [isActive, setIsActive] = useState({
    available: true,
    status: "available"
  })
  const handleIsActive = (status) => {
    if (status == "available") {
      setIsActive({
        available: true,
        status: "available"
      })
    }
    else {
      setIsActive({
        available: false,
        status: "selected"
      })
    }
  }
  //1st part end
  //2nd part ----------
  const [available, setAvailable] = useState([]);
  const handleAddToAvailable = (data) => {

    //each item 1 time selected
    const isAlreadySelected = available.some(item => item.id === data.id);
    if (isAlreadySelected) {
      toast.error('Already Added Item');
      return;
    } else {

      // toast.success('Item Added');

    }
    const newAvailable = [...available, data];
    if (newAvailable.length <= 6 && data.price <= balance) {
      setAvailable(newAvailable);
      const updateBalance = balance - data.price;
      setBalance(updateBalance);
      toast("item Added");

    }
    else if (newAvailable.length > 6) {

      toast("6 more not added");
    }
    else {
      toast("Balance : Empty");
    }
  };

  //2nd part End----------
  //Remove implements
  const handleRemoveItem = (id) => {
    // remove 
    const availableItem = available.filter(item => item.id !== id);
    setAvailable(availableItem);
    //extra remove
    const btnList = btn - 1;
    setBtn(btnList);
    toast('Item remove Successful---');
  };

  const [balance, setBalance] = useState(0);
  const updateBalance = (data) => {
    const updateBalance = balance + data;
    setBalance(updateBalance);
  }

  const [btn, setBtn] = useState(0);
  const updateAvailable = (data) => {
    let btnList = btn + 1;
    if (btnList <= 6 && data.price <= balance) {
      return setBtn(btnList);
    }


  };

  // main code app jsx --------------------------------------------------------------------------------------------
  return (
    <div >
      <Header handleIsActive={handleIsActive} isActive={isActive} handleAddToAvailable={handleAddToAvailable} available={available} handleRemoveItem={handleRemoveItem} updateAvailable={updateAvailable} btn={btn} updateBalance={updateBalance} balance={balance}></Header>
      {/* <Players></Players> */}
      <ToastContainer />
      <Footer></Footer>

    </div>

  );
};

export default App;
