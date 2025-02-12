const display = document.getElementById("display");
const display1 = document.getElementById("display1");

const displayValue = (value)=>{
  // value === "." checks
  if(value === "." && display.value.includes("."))return;
  display.value += value;
  
}

const clearAll = ()=>{
  display.value = "";
  display1.value = "";
}

const delChar = ()=>{
  display.value = display.value.slice(0, -1);
} 

const calculate = () => {
  // display.value = display.value;
  display1.value = eval(display.value)
  
}

const sqaureRoot = () => {
   //display1.value = Math.sqrt(display.value);
  try {
    display1.value = Math.sqrt(display.value);
  }
  catch(error) {
    display.value = "syntax error";
  }
}

const clearUp = () => {
  display1.value = "";
}

const offButton = ()=>{
  display1.value = "";
display.value = "";
}