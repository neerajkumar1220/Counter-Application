document.getElementById("increement_btn").addEventListener("click",IncreementCounter);
document.getElementById("decrement_btn").addEventListener("click",DecreementCounter);
document.getElementById("reset_btn").addEventListener("click",ResetCounter);


const CounterDisplay=document.getElementById("CounterDisplay");
let Countervalue=0;

function IncreementCounter(){
Countervalue++
updatecounterdisplay();
}

function DecreementCounter(){
    if(Countervalue>0)
        {
            Countervalue--
    updatecounterdisplay();
        }
    
}

function ResetCounter(){
Countervalue=0;
updatecounterdisplay();
}

function updatecounterdisplay(){

    CounterDisplay.textContent=Countervalue;

}