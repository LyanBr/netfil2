// Seleciona todos os itens de lista (li) dentro da lista não ordenada (ul) dentro da classe 'div_header'.
const menuItems = document.querySelectorAll('.div_header ul li');

// Para cada item de menu, adiciona dois ouvintes de eventos (mouseenter e mouseleave).
menuItems.forEach(item => {
    // Quando o mouse entra no item, move o item para cima (-5px) para criar um efeito visual.
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });

    // Quando o mouse sai do item, move o item de volta para a posição original (0px).
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Seleciona o elemento de input de pesquisa com o ID 'search-input'.
const searchInput = document.getElementById('search-input');

// Adiciona dois ouvintes de eventos para o input de pesquisa (clique e blur).
searchInput.addEventListener('click', () => {
    // Quando o input de pesquisa é clicado, muda o estilo para fundo branco e texto preto.
    searchInput.style.background = '#fff';
    searchInput.style.color = '#000';
});

searchInput.addEventListener('blur', () => {
    // Quando o input de pesquisa perde o foco, muda o estilo de volta para fundo escuro e texto claro.
    searchInput.style.background = '#333';
    searchInput.style.color = '#fff';
});

// Seleciona o botão de pesquisa com o ID 'search-button'.
const searchButton = document.getElementById('search-button');

// Adiciona um ouvinte de evento para o clique no botão de pesquisa.
searchButton.addEventListener('click', () => {
    // Adiciona a classe 'search-animation' ao botão para iniciar uma animação.
    searchButton.classList.add('search-animation');
    
    // Define um temporizador para remover a classe 'search-animation' após 200 milissegundos (0,2 segundos).
    setTimeout(() => {
        searchButton.classList.remove('search-animation');
    }, 200);
});
// Aguarda o evento DOMContentLoaded para garantir que o HTML da página foi totalmente carregado.
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe CSS "movie" e os armazena em uma NodeList.
    const movieContainers = document.querySelectorAll(".movie");

    // Para cada elemento na NodeList "movieContainers".
    movieContainers.forEach((container) => {
        // Adiciona um ouvinte de evento para o evento de clique em cada elemento "movie".
        container.addEventListener("click", () => {
            // Obtém o valor do atributo 'data-filme' do elemento clicado.
            const filmeSelecionado = container.dataset.filme;

            // Redireciona para a página de templatefilme.html com o filme selecionado como parâmetro na URL.
            window.location.href = `templatefilme.html?filme=${filmeSelecionado}`;
        });
    });
});
// Aguarda o evento DOMContentLoaded para garantir que o HTML da página foi totalmente carregado.
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe CSS "movie" e armazena-os em uma NodeList.
    const movieContainers = document.querySelectorAll(".movie");

    // Obtém o elemento com o ID "destaque-title" e armazena-o em destaqueTitle.
    const destaqueTitle = document.getElementById("destaque-title");

    // Função para filtrar e exibir filmes com base na categoria fornecida.
    function filterMovies(category) {
        // Itera sobre cada elemento "movie" na NodeList.
        movieContainers.forEach(container => {
            // Obtém o valor do atributo 'data-tag' de cada container.
            const tag = container.getAttribute("data-tag");

            // Verifica se a categoria é "inicio" ou corresponde à tag do container.
            if (category === "inicio" || category === tag) {
                container.style.display = "inline-block"; // Exibe o container.
            } else {
                container.style.display = "none"; // Oculta o container.
            }
        });

        // Atualiza o texto do elemento com o ID "destaque-title" com base na categoria selecionada.
        if (category === "serie") {
            destaqueTitle.textContent = "Séries em Destaque";
        } else if (category === "filme") {
            destaqueTitle.textContent = "Filmes em Destaque";
        } else {
            destaqueTitle.textContent = "Filmes/Séries em Destaque";
        }
    }

    // Adiciona ouvintes de evento para os botões de filtro e chama a função filterMovies com a categoria correspondente.
    document.getElementById("filtro-inicio").addEventListener("click", () => {
        filterMovies("inicio");
    });

    document.getElementById("filtro-series").addEventListener("click", () => {
        filterMovies("serie");
    });

    document.getElementById("filtro-filmes").addEventListener("click", () => {
        filterMovies("filme");
    });
});
// Aguarda o evento DOMContentLoaded para garantir que o HTML da página foi totalmente carregado.
document.addEventListener("DOMContentLoaded", function() {
    // Obtém referências aos elementos HTML com os IDs "filme1" e "destino".
    var divParaMover = document.getElementById("filme1");
    var destino = document.getElementById("destino");

    // Verifica se ambos os elementos existem.
    if (divParaMover && destino) {
        // Move a div identificada por "filme1" para o elemento com ID "destino".
        destino.appendChild(divParaMover);
    }
});
// Obtém referências aos elementos HTML com os IDs "search-button", "search-input" e "resultados-container".
const searchButto = document.getElementById('search-button');
const searchInpu = document.getElementById('search-input');
const resultadosContainer = document.getElementById('resultados-container');

// Adiciona um ouvinte de evento para o clique no botão de pesquisa.
searchButto.addEventListener('click', () => {
    // Obtém o valor do campo de entrada de pesquisa.
    const searchTerm = searchInpu.value;

    // Realiza uma requisição fetch para buscar filmes com base no termo de pesquisa.
    fetch(`/buscar-filmes?term=${searchTerm}`)
        .then((response) => response.json())
        .then((resultados) => {
            // Exibe os resultados chamando a função exibirResultados.
            exibirResultados(resultados);
        })
        .catch((error) => {
            // Em caso de erro, exibe uma mensagem de erro no console.
            console.error('Erro:', error);
        });
});

// Função que exibe os resultados na página.
function exibirResultados(resultados) {
    // Limpa quaisquer resultados anteriores no contêiner.
    resultadosContainer.innerHTML = '';

    // Verifica se há resultados.
    if (resultados.length === 0) {
        // Se não houver resultados, exibe uma mensagem indicando isso.
        resultadosContainer.innerHTML = '<p>Nenhum filme encontrado.</p>';
        return;
    }

    // Itera sobre os resultados e cria elementos HTML para cada filme, adicionando-os ao contêiner.
    resultados.forEach((filme) => {
        const filmeDiv = document.createElement('div');
        filmeDiv.className = 'movie';
        // Crie elementos de imagem, título, etc., e adicione ao filmeDiv
        // ...

        resultadosContainer.appendChild(filmeDiv);
    });
}
// Define um array representando o código Konami.
const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
];
let konamiCodePosition = 0;

// Função para verificar se a sequência do código Konami foi inserida.
function checkKonamiCode(event) {
    const key = event.key;

    // Verifica se a tecla pressionada corresponde à próxima posição no código Konami.
    if (key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;

        // Se a sequência completa foi inserida, chama a função openCalculator.
        if (konamiCodePosition === konamiCode.length) {
            openCalculator();
            konamiCodePosition = 0;
        }
    } else {
        // Reinicia a verificação se a tecla pressionada não corresponde à posição esperada no código Konami.
        konamiCodePosition = 0;
    }
}

// Função que é chamada ao inserir corretamente o código Konami, redirecionando para 'calculadora.html'.
function openCalculator() {
    window.location.href = 'calculadora.html';
    // Neste exemplo, exibimos um alerta como mensagem.
    alert("Código secreto detectado. Abrindo a calculadora.");
}

// Adiciona um ouvinte de evento para o evento de tecla pressionada.
document.addEventListener('keydown', checkKonamiCode);
// Funções para compartilhar o site nas redes sociais.

// Compartilha no Facebook.
function shareOnFacebook() {
    // Substitua a URL pelo link que deseja compartilhar no Facebook.
    var url = "https://lyanbr.github.io/netfil2/index.html";
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank");
}

// Compartilha no Twitter.
function shareOnTwitter() {
    // Substitua a URL, texto e hashtags conforme necessário.
    var url = "https://lyanbr.github.io/netfil2/index.html";
    var text = "Confira este incrível site! Feito Pelos melhores Programers do Brasil, @luanbraune @netossim";
    var hashtags = "webdev,SPIIFTO,teste";
    window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text) + "&hashtags=" + encodeURIComponent(hashtags), "_blank");
}

// Compartilha no WhatsApp.
function shareOnWhatsApp() {
    // Substitua o número e a mensagem conforme necessário.
    var text = "Confira este incrível site: https://lyanbr.github.io/netfil2/index.html";
    window.open("https://wa.me/" + "?text=" + encodeURIComponent(text), "_blank");
}
