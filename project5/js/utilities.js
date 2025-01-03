// page change on click
function blogPage() {
    window.location.href = '/Blog.html';
}
function goToHomepage() {
    window.location.href = '/index.html'; 
}
// Donate page function
function getInputValue(id){
    const value = document.getElementById(id).value;
    const numberValue = parseFloat(value);
    return(numberValue);
}