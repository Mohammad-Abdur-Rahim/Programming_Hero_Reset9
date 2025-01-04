
// Donate page function for Donate 1 ------------------------------------------START
function getInputValue(id){
    const value = document.getElementById(id).value;
    const numberValue = parseFloat(value);
    if(numberValue >0 ){
        
        return(numberValue);
    }
    else{
        alert('Please enter a valid Number :')
        return null;
    }
 
}
function getInputText(id){
    const value = document.getElementById(id).innerText;
    const numberValue = parseFloat(value);
    return(numberValue);
}
// textonly value receive function 
function getInputTextonly(id){
    const value = document.getElementById(id).innerText;
    return(value);
}
// Donate page function for Donate 1 ------------------------------------------END
// toggle system create 


function showSectionById(id){
    //hide all first
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('Blog-section').classList.add('hidden');
  
    // SHOW PROvided id section
    document.getElementById(id).classList.remove('hidden');

}
document.getElementById('showDonateButton').addEventListener('click',function(){
    console.log("added ");
    showSectionById('donate-section')
    this.classList.add('bgbtn');
    document.getElementById('showHistoryButton').classList.remove('bgbtn');
});

document.getElementById('showHistoryButton').addEventListener('click',function(){
    console.log("added ");
    showSectionById('history-section')
    this.classList.add('bgbtn');
    document.getElementById('showDonateButton').classList.remove('bgbtn');
 
});
document.getElementById('showBlogButton').addEventListener('click',function(){
    console.log("added ");
    showSectionById('Blog-section')

});


















