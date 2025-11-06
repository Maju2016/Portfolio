//Selecionar a Secção About
const about = document.querySelector('#about');

//Função para buscar os dados no GitHub
async function getApiGithub(){

    try{

        //Passo 1: Fazer uma requisição GET para a API do GitHub
        const dadosPerfil = await fetch('https://api.github.com/users/Maju2016');

        //Passo 2: Converter a resposta da API para JSON
        const perfilJson = await dadosPerfil.json();

        //Passo 03: Criar o HTML/CSS com os dados do Perfil
        let conteudo = `            
        
            <figure class="about_image">
                <img
                    src="${perfilJson.avatar_url}"
                    alt="Foto do perfil do GitHub - ${perfilJson.name}"
                >
            </figure>

            <article class="about_content">

                <h2>Sobre mim</h2>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Nulla id gravida magna, ut semper sapien.</p>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Nulla id gravida magna, ut semper sapien.</p>

                <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>
                    <div class="stats-wrapper">
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.followers}</p>
                            <p class="stat-label">Seguidores</p>
                        </div>
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.public_repos}</p>
                            <p class="stat-label">Repositórios</p>
                        </div>
                    </div>
                </div>
            </article>

            
            `

            //Passo 4: adicionar o HTML dentro da Seção About
            about.innerHTML += conteudo;


    } catch(error){
        console.error(error);
    }
}

//Chamar a função getAPIGithub()
getApiGithub();