//CALCULATOR 1 USING TABLE 

let screen = document.querySelectorAll(".calc-screen");
let btns = document.querySelectorAll(".key");
const signs =['+', '-', '*','/', '.','^']; 

for (let i = 0; i< btns.length; i++){
    btns[i].onclick = function (a){
        const screen = document.querySelector(".calc-screen")
        const inputValue = screen.innerHTML;
        const btnValue = this.innerHTML;
        console.log(btnValue);

        if (btnValue === 'CE'){
            screen.innerHTML = ''; 
        } else if(btnValue === '=') {
            screen.innerHTML = eval(inputValue);
        } else (screen.innerHTML += btnValue)

    }
       
}




