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
    const titledonate1 =getInputTextonly('titledonate1');
    const  div = document.createElement('div');
        div.innerHTML =
        `
         <div class="bg-white rounded-lg border p-6 space-x-6 w-10/12">
                <p class="text-yellow-400 font-extrabold">${donate1Value} Taka ${titledonate1}</p>
            </div>
        `;
        console.log(div);
    console.log(titledonate1,donate1Value);
           // Check if 'transactionContainer' exists before appending
    const transactionContainer = document.getElementById('transactionContainer');
    if (transactionContainer) {
        transactionContainer.appendChild(div);
    } else {
        console.error("transactionContainer not found in the DOM");
    }


});