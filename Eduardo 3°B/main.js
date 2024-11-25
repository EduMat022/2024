document.getElementById("meuBotao").addEventListener("click", function() {
    const numeroAleatoripo = Math.floor(Math.random()*20)+1;
    document.getElementById("resuldado").textContent = "Resuldado:" + numeroAleatoripo});