//Selecionar a Secção About
const about = document.querySelector('#about');

//Selecionar o formulario
const formulario = document.querySelector("#formulario");

//Expressão regular para validação de e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
                <p>Meu nome é Maria Julia, sou uma Desenvolvedora Junior, e curso Engenharia de Computação, apaixonada por tecnologia e por tudo o que ela pode tranformar no mundo. </p>
                <p>Tive a oportunidade de atuar como estagiária em um escritório credenciado por um banco, onde automatizei disparos de mensagens e dei suporte no front-end de um CRM. Gosto de testar meus programas em situações improváveis — mas possíveis — porque acredito que os melhores desenvolvedores são aqueles que antecipam problemas e constroem soluções.</p>
                <p>Além da faculdade, participo do Bootcamp Java Fullstack da Generation, onde já desenvolvi projetos como o back-end de um blog pessoal com CRUD e Security, e desenvolvi o front-end de um portfólio pessoal com HTMl, CSS e JS, além de projetos integradores em grupo, e continuo ampliando minhas habilidades a cada novo desafio.</p>

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

// Função de envio e validação do formulário
formulario.addEventListener('submit', function(event){
   //Validação do campo nome
    event.preventDefault(); //impede o envio automatico do formulário
    const campoNome = document.querySelector('#nome'); //validação do campo nome
    const txtNome = document.querySelector('#txtNome');
   
    //Nome precisa ter pelo menos 3 caracteres
    if(campoNome.value.length < 3){
      txtNome.innerHTML = 'O nome deve ter pelo menos 3 caracteres.';
      campoNome.focus();
      return;
    }else{
      txtNome.innerHTML = '';
    }
 
   //Validação do campo email
    const campoEmail = document.querySelector('#email'); //validação do campo nome
    const txtEmail = document.querySelector('#txtEmail');
   
    //Verifica se o email é válido
    if(!campoEmail.value.match(emailRegex)){
      txtEmail.innerHTML = 'Digite um e-mail válido.';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }
 
    //Validação do campo assunto
    const campoAssunto = document.querySelector('#assunto'); //validação do campo assunto
    const txtAssunto = document.querySelector('#txtAssunto');
   
    //Nome precisa ter pelo menos  caracteres
    if(campoAssunto.value.length < 5){
      txtAssunto.innerHTML = 'O assunto deve ter pelo menos 5 caracteres.';
      campoAssunto.focus();
      return;
    }else{
      txtAssunto.innerHTML = '';
    }
 
    //Se passou por todas as validações, envia o formulário
    formulario.submit();
 
});
//prevent default: não envia o formulario enquanto nao fizer a validação
//focus: coloca o cursor no campo que precisa ser preenchido
 
 
// Chamar a função getApiGithub () para buscar os dados no Github
getApiGithub();

// Função em "Ver Projeto"
function initProjetos() {
    const verProjetoBtns = document.querySelectorAll('.ver-projeto-btn');
    
    verProjetoBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const projetos = [
                {
                    nome: "Blog Pessoal",
                    descricao: "Projeto desenvolvido para fins educacionais",
                    link: "https://github.com/Maju2016/blogpessoal_spring.git"
                },
                {
                    nome: "SmartRH", 
                    descricao: "Sistema de Cadastro RH",
                    link: "https://gestaorh-529f.onrender.com/swagger-ui/swagger-ui/index.html" 
                },
            ];
            
            const projeto = projetos[index];
            
            if (projeto.link && projeto.link !== "#") {
                window.open(projeto.link, '_blank');
            } else {
                alert(`Sinto muito que você não conseguiu visualizar o projeto. Caso se sinta à vontade, entre em contato para me avisar que não conseguiu visualizar!`);
            }
        });
    });
}

// Chamar a função quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    initProjetos();
});