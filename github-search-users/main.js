var form = document.getElementById("myForm")

form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value 

    //para limpar a tela e fazer nova busca
    document.getElementById("result").innerHTML = " "

    //chamada fetch para o URL da API do GitHUb
    //método fetch retorna uma promise
    fetch(`https://api.github.com/users/${search}/repos`)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        
            var listRepository = "";
            data.forEach((data) => {
                listRepository += "<tr>";
                listRepository += "<td>" + data.name + "</td>";
                listRepository += "<td>" + data.description + "</td>";
                listRepository += "<td>" + data.html_url + "</td></tr>";
            });
            document.getElementById("result").innerHTML = listRepository;
    })
})