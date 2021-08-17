function calc(num){                                                                         
    let screen = document.getElementById("screen").value;
        if(screen){
        var qtd_char = document.getElementById("screen").value.length;
        var ultimo_char = screen.substring(qtd_char-1, qtd_char);
            console.log("Último caractere: " + ultimo_char)   
        }
        
        if((ultimo_char == '+' || ultimo_char == '-' || ultimo_char == '*' || ultimo_char == '/') &&
         (num == '+' || num == '-' || num == '*' || num == '/')) {
            return ;    
        }

        document.getElementById("screen").value += num;       
}

function reset(){
    document.getElementById("screen").value = " ";
}
            
function total(){
    var result = document.getElementById("screen").value;
    document.getElementById("screen").value = eval(result);
}

function runScript(e) {
// See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        var result = document.getElementById("screen").value;
        document.getElementById("screen").value = eval(result);
    }
}