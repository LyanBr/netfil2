// Efeito de hover nos itens do menu
const menuItems = document.querySelectorAll('.div_header ul li');

menuItems.forEach(item => {
    // Ao passar o mouse sobre o item, desloca para cima
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });

    // Ao retirar o mouse, volta à posição original
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Mudança de estilo ao clicar no campo de pesquisa
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('click', () => {
    searchInput.style.background = '#fff';
    searchInput.style.color = '#000';
});

// Mudança de estilo ao sair do campo de pesquisa
searchInput.addEventListener('blur', () => {
    searchInput.style.background = '#333';
    searchInput.style.color = '#fff';
});

// Animação do botão de pesquisa
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    // Adiciona classe de animação
    searchButton.classList.add('search-animation');
    
    // Remove a classe após 200 milissegundos (final da animação)
    setTimeout(() => {
        searchButton.classList.remove('search-animation');
    }, 200);
});

// Redirecionamento ao clicar em um contêiner de filme
document.addEventListener("DOMContentLoaded", function () {
    const movieContainers = document.querySelectorAll(".movie");

    movieContainers.forEach((container) => {
        container.addEventListener("click", () => {
            const filmeSelecionado = container.dataset.filme;

            // Redireciona para a página de templatefilme.html com o filme selecionado como parâmetro
            window.location.href = `templatefilme.html?filme=${filmeSelecionado}`;
        });
    });
});

// Filtragem de filmes por categoria
document.addEventListener("DOMContentLoaded", function () {
    const movieContainers = document.querySelectorAll(".movie");
    const destaqueTitle = document.getElementById("destaque-title");

    function filterMovies(category) {
        movieContainers.forEach(container => {
            const tag = container.getAttribute("data-tag");

            // Exibe ou oculta conforme a categoria
            if (category === "inicio" || category === tag) {
                container.style.display = "inline-block";
            } else {
                container.style.display = "none";
            }
        });

        // Altera o título conforme a categoria selecionada
        if (category === "serie") {
            destaqueTitle.textContent = "Séries em Destaque";
        } else if (category === "filme") {
            destaqueTitle.textContent = "Filmes em Destaque";
        } else {
            destaqueTitle.textContent = "Filmes/Séries em Destaque";
        }
    }

    // Adiciona ouvintes de evento para os botões de filtro
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

// Mover a div "filme1" para outra página
document.addEventListener("DOMContentLoaded", function() {
    var divParaMover = document.getElementById("filme1");
    var destino = document.getElementById("destino");

    if (divParaMover && destino) {
        // Mover a div de uma página para outra
        destino.appendChild(divParaMover);
    }
});

// Busca de filmes
const searchButto = document.getElementById('search-button');
const searchInpu = document.getElementById('search-input');
const resultadosContainer = document.getElementById('resultados-container');

searchButto.addEventListener('click', () => {
    const searchTerm = searchInpu.value;

    fetch(`/buscar-filmes?term=${searchTerm}`)
        .then((response) => response.json())
        .then((resultados) => {
            exibirResultados(resultados);
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
});

// Função para exibir resultados na página
function exibirResultados(resultados) {
    resultadosContainer.innerHTML = ''; // Limpar resultados anteriores

    if (resultados.length === 0) {
        resultadosContainer.innerHTML = '<p>Nenhum filme encontrado.</p>';
        return;
    }

    resultados.forEach((filme) => {
        const filmeDiv = document.createElement('div');
        filmeDiv.className = 'movie';
        // Crie elementos de imagem, título, etc., e adicione ao filmeDiv
        // ...

        resultadosContainer.appendChild(filmeDiv);
    });
}

// Código Konami para abrir a calculadora
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

function checkKonamiCode(event) {
    const key = event.key;

    if (key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;

        if (konamiCodePosition === konamiCode.length) {
            openCalculator();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
}

// Função para abrir a calculadora
function openCalculator() {
    window.location.href = 'calculadora.html'
    // Neste exemplo, exibimos um alerta como mensagem.
    alert("Código secreto detectado. Abrindo a calculadora.");
}

// Adiciona um ouvinte de evento para a tecla pressionada
document.addEventListener('keydown', checkKonamiCode);

// Funções para compartilhar nas redes sociais
function shareOnFacebook() {
    // Substitua a URL pelo link que deseja compartilhar no Facebook
    var url = "https://lyanbr.github.io/netfil2/index.html";
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank");
}

function shareOnTwitter() {
    // Substitua a URL, texto e hashtags conforme necessário
    var url = "https://lyanbr.github.io/netfil2/index.html";
    var text = "Confira este incrível site! Feito Pelos melhores Programers do Brasil, @luanbraune @netossim";
    var hashtags = "webdev,SPIIFTO,teste";
    window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text) + "&hashtags=" + encodeURIComponent(hashtags), "_blank");
}

function shareOnWhatsApp() {
    // Substitua o número e a mensagem conforme necessário
    var text = "Confira este incrível site: https://lyanbr.github.io/netfil2/index.html";
    window.open("https://wa.me/" + "?text=" + encodeURIComponent(text), "_blank");
}
