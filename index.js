//CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value = display.value + input
}

function clearDisplay(){
    display.value ="";

}
//"4*3"
function calculate(){
    try{
        display.value = eval(display.value);

       }
       catch(error){
        display.value = "error";
       }


}