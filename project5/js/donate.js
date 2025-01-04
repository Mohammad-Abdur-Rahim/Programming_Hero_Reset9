   // step: 1  value is receive 
    document.getElementById('donate1btn').addEventListener('click',function(e){
    const donate1Value  = getInputValue('donate1');
    console.log('donate 1 is :',donate1Value);
    // step: 2  add donate + and - main bvalance---
    const plusDonat1 = getInputText('plusDonat1');
    console.log('plusDonat1 old value is :',plusDonat1);
    const plusDonat1UpdateValue = plusDonat1 + donate1Value;
    console.log('plusDonat1UpdateValue is :',plusDonat1UpdateValue);
    document.getElementById('plusDonat1').innerText = plusDonat1UpdateValue;
    
    // step: 3 Main Balance  - Calculation --------------------
    const mainBalance = getInputText('mainBalance');
    console.log('mainBalance is :',mainBalance);
    const mainBalanceUpdateValue = mainBalance - donate1Value;
    document.getElementById('mainBalance').innerText = mainBalanceUpdateValue;


    // step: 4 Transaction History 
const titledonate1 = getInputTextonly('titledonate1');
const section = document.createElement('section');
section.innerHTML =`
           <section    class="container grid grid-cols-1 place-items-center space-y-5 pb-5 ">
            <div  class="bg-white rounded-lg border p-6 space-x-6 w-10/12">
                <p   class="text-yellow-400 font-extrabold">dontae1 ${donate1Value} and ${titledonate1}</p>
                
            </div>
            
           
        </section>`;
            
document.getElementById('transaction_Container').appendChild(section);



});

