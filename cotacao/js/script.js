
(async function(){
    const URL = "https://economia.awesomeapi.com.br/json/all";
    const apiresponse = await fetch(URL);

    const moedas = JSON.parse(await apiresponse.text());

    for(const moeda in moedas){
        const nome = moedas[moeda].name;
        const valor = moedas[moeda].bid;

        const contentdiv = document.querySelector(".conteudo");
        contentdiv.innerHTML += `${nome} -> R$${Number(valor).toFixed(2)} <br/>`;
    }
})();
