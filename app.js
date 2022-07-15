const calculator = document.querySelector(".calculator"),
        screenInput = document.querySelector(".screen input"),
        button = document.querySelectorAll(".body .btn"),
        clearBtn = document.querySelector(".body .clear"),
        equalBtn =  document.querySelector(".equal");

// diplaying value to screen
function displayValue(val){
    screenInput.value += val;
}
//  evaluating the values in the screen
equalBtn.addEventListener("click", ()=>{
    if(screenInput.value != ""){
        const value = screenInput.value;
        screenInput.value = eval(value);
    }else if(screenInput.value == ""){
        alert("Enter a value to calculate");
    }
});
// clearing the input
clearBtn.addEventListener("click", ()=>{
    screenInput.value = ""
});
// getting the values of the  button. 
button.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        displayValue(e.target.textContent)
    });
});