//CALCULATOR 2 USING FLEX BOX

let display = document.querySelectorAll(".calc-screen2");
let touch= document.querySelectorAll(".operator");
const keys =['+', '-', '*','/', '.','^','%']; 
const operation = [ '%']

for (let i = 0; i< touch.length; i++){
    touch[i].onclick = function (a){
        const display = document.querySelector(".calc-screen2")
        const inputValue = display.innerHTML;
        const btnValue = this.innerHTML;
        console.log(btnValue);

        if (btnValue === 'CE'){
            display.innerHTML = ''; 
        } else if(btnValue === '=') {
            display.innerHTML = eval(inputValue);
        } else (display.innerHTML += btnValue)



        if (operation === "%") { 
            const result = firstNumber * currentValue / 100;
            inputField.Value = result;
        } else if (operation === "+") { 
            const result = firstNumber + (firstNumber * currentValue / 100);
            inputField.Value = result

        } else if (operation === "-") {
            const result = firstNumber - (firstNumber * currentValue / 100);
            inputField.Value = result;
        } else if (operation === "*" || operation === "/") {
            const result = firstNumber * (currentValue / 100);
            inputField.Value = result;
        }

    }
    
}





