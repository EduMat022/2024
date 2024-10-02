const urls = 'https://raw.githubsercontent.com/guilhermenrails/api/main/dados-globais.json'

async function visualizarinfo() {
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);
}