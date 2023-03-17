export default function(ev){
    const allowKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

    ev.preventDefault();

    if(allowKeys.includes(ev.key)){
        input.value += ev.key;
        return;
    };

    if(ev.key === "Backspace"){
        input.value = input.value.slice(0, -1);
    };

    if(ev.key === "Enter") {
        calculate();
    };

}