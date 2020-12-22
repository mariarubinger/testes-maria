function calc(num){ 
    document.getElementById("screen").value += num;
}
            
function reset(){
    document.getElementById("screen").value = " ";
}
            
function total(){
    var result = document.getElementById("screen").value;
    document.getElementById("screen").value = eval(result);
    // função eval(string) de javascript
}