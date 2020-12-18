const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
  ];
  
/* INTRODUÇÃO
método FILTER e  MAP não modificam a array original,
retorno da função vai ser uma array nova

REDUCE não retorna uma array, vai retornar um valor único



>>>>>>>>>>>>> método FILTER <<<<<<<<<<<<<< */
/* mostra os valores que tem na array
  const precosFiltro = precos.filter(function(preco) {
    console.log(preco);
    if (preco === "R$ 400") {
        return true;
    } else {
        return false;
    } */


/* 
>>>> verificar se é preço - nesse caso vai retornar só os valores que tem o R$ 
    const precosFiltro = precos.filter(function(preco) {
        console.log(preco);
        if (preco.includes("R$")) {
            return true;
        } else {
            return false;
    }
  });
    console.log(precosFiltro); */


/* 
>>> Método FILTER com Arrow Function <<< 

const precosFiltro = precos.filter(preco => preco.includes("R$"));
  
console.log(precosFiltro);

<<<<< */


/*
>>>>>>>>>>>>> método MAP <<<<<<<<<<<<<< */

//const precosFiltro = precos.filter(preco => preco.includes("R$"));
  
// Transformas os preços em números
// precoNumeros é uma array nova
// O método replace() procura uma string por um valor especificado ou uma expressão regular e retorna uma nova string onde os valores especificados são substituídos.

/* const precoNumeros = precosFiltro.map(function(preco) {
    console.log(preco);
    return preco.replace("R$ ", " ");
});

console.log(precoNumeros); */

//OU 

/* const precoNumeros = precosFiltro.map(preco => 
    Number(preco.replace("R$ ", " "))
);

console.log(precoNumeros);
 */



/*
>>>>>>>>>>>>> método REDUCE <<<<<<<<<<<<<< */

const precosFiltro = precos.filter(preco => preco.includes("R$"));

const precoNumeros = precosFiltro.map(preco => 
    Number(preco.replace("R$ ", ""))
);

// acumulando os valores e vai retornar o toal de todos os valores da array 
/* const total = precoNumeros.reduce(function(anterior, atual) {
    return anterior + atual;
});

console.log(total);
 */
//OU

const total = precoNumeros.reduce((acc, item) => acc + item);
console.log(total);