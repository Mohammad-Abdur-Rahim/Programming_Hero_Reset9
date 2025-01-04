//Donate Section 1 -------------------------------------------------------------START
// step: 1  value is receive 
document.getElementById('donate1btn').addEventListener('click', function (e) {
    const donate1Value = getInputValue('donate1');
    console.log('donate 1 is :', donate1Value);
    // step: 2  add donate + and - main bvalance---
    const plusDonat1 = getInputText('plusDonat1');
    console.log('plusDonat1 old value is :', plusDonat1);
    const plusDonat1UpdateValue = plusDonat1 + donate1Value;
    console.log('plusDonat1UpdateValue is :', plusDonat1UpdateValue);
    document.getElementById('plusDonat1').innerText = plusDonat1UpdateValue;

    // step: 3 Main Balance  - Calculation --------------------
    const mainBalance = getInputText('mainBalance');
    console.log('mainBalance is :', mainBalance);
    const mainBalanceUpdateValue = mainBalance - donate1Value;
    document.getElementById('mainBalance').innerText = mainBalanceUpdateValue;
    // step: 4 Transaction History 
    const titledonate1 = getInputTextonly('titledonate1');
    const section = document.createElement('section');
    section.innerHTML = `
           <section    class="container grid grid-cols-1 place-items-center space-y-5 pb-5 ">
            <div  class="bg-white rounded-lg border p-6 space-x-6 w-10/12">
                <p   class="text-black font-bold"><span class="text-red-500 font-extrabold text-xl">1.</span> ${donate1Value} Taka is ${titledonate1}</p>
            </div>
  
        </section>`;
    document.getElementById('transaction_Container').appendChild(section);
    
    alert(`Warring you Donate Money is : ${donate1Value} Taka`)
});

//Donate Section 1 -------------------------------------------------------------END
//Donate Section 2 -------------------------------------------------------------START
// step: 1  value is receive 
document.getElementById('donate2btn').addEventListener('click', function (e) {
    const donate2Value = getInputValue('donate2');
    // step: 2  add donate + and - main bvalance---
    const plusDonat2 = getInputText('plusDonat2');
    const plusDonat2UpdateValue = plusDonat2 + donate2Value;
    document.getElementById('plusDonat2').innerText = plusDonat2UpdateValue;
    // step: 3 Main Balance  - Calculation --------------------
    const mainBalance = getInputText('mainBalance');
    const mainBalanceUpdateValue = mainBalance - donate2Value;
    document.getElementById('mainBalance').innerText = mainBalanceUpdateValue;
    // step: 4 Transaction History 
    const titledonate2 = getInputTextonly('titledonate2');
    const section = document.createElement('section');
    section.innerHTML = `
               <section    class="container grid grid-cols-1 place-items-center space-y-5 pb-5 ">
                <div  class="bg-white rounded-lg border p-6 space-x-6 w-10/12">
                    <p   class="text-black font-bold"><span class="text-red-500 font-extrabold text-xl">2.</span> ${donate2Value} Taka is ${titledonate2}</p>
                    
                </div>
                
               
            </section>`;

    document.getElementById('transaction_Container').appendChild(section);
});
//Donate Section 2 -------------------------------------------------------------END
//Donate Section 3 -------------------------------------------------------------START
// step: 1  value is receive 
document.getElementById('donate3btn').addEventListener('click', function (e) {
    const donate3Value = getInputValue('donate3');
    // step: 2  add donate + and - main bvalance---
    const plusDonat3 = getInputText('plusDonat3');
    const plusDonat3UpdateValue = plusDonat3 + donate3Value;
    document.getElementById('plusDonat3').innerText = plusDonat3UpdateValue;
    // step: 3 Main Balance  - Calculation --------------------
    const mainBalance = getInputText('mainBalance');
    const mainBalanceUpdateValue = mainBalance - donate3Value;
    document.getElementById('mainBalance').innerText = mainBalanceUpdateValue;
    // step: 4 Transaction History 
    const titledonate3 = getInputTextonly('titledonate3');
    const section = document.createElement('section');
    section.innerHTML = `
           <section    class="container grid grid-cols-1 place-items-center space-y-5 pb-5 ">
            <div  class="bg-white rounded-lg border p-6 space-x-6 w-10/12">
                <p   class="text-black font-bold"><span class="text-red-500 font-extrabold text-xl">3.</span> ${donate3Value} Taka is ${titledonate3}</p>
                
            </div>
            
           
        </section>`;

    document.getElementById('transaction_Container').appendChild(section);
});
//Donate Section 3 -------------------------------------------------------------END
