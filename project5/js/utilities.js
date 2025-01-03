// page change on click
function blogPage() {
    window.location.href = '/Blog.html';
}
function goToHomepage() {
    window.location.href = '/index.html'; 
}
// Donate page function all here -------------------
function getInputValue(id){
    const value = document.getElementById(id).value;
    const numberValue = parseFloat(value);
    return(numberValue);
}
function getInputText(id){
    const value = document.getElementById(id).innerText;
    const numberValue = parseFloat(value);
    return(numberValue);
}