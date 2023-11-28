const menuItems = document.querySelectorAll('.div_header ul li');
        
                menuItems.forEach(item => {
                    item.addEventListener('mouseenter', () => {
                        item.style.transform = 'translateY(-5px)';
                    });
        
                    item.addEventListener('mouseleave', () => {
                        item.style.transform = 'translateY(0)';
                    });
                });
                const searchInput = document.getElementById('search-input');
                
                searchInput.addEventListener('click', () => {
                    searchInput.style.background = '#fff';
                    searchInput.style.color = '#000';
                });
        
                searchInput.addEventListener('blur', () => {
                    searchInput.style.background = '#333';
                    searchInput.style.color = '#fff';
                });
                const searchButton = document.getElementById('search-button');
            searchButton.addEventListener('click', () => {
                    searchButton.classList.add('search-animation'); /* Adicionamos a classe da animação */
                    setTimeout(() => {
                        searchButton.classList.remove('search-animation'); /* Removemos a classe após a animação */
                    }, 200);
                });

// JavaScript no arquivo "index.html"
document.addEventListener("DOMContentLoaded", function () {
    const movieContainers = document.querySelectorAll(".movie");

    movieContainers.forEach((container) => {
        container.addEventListener("click", () => {
            const filmeSelecionado = container.dataset.filme;

            // Redirecionar para a página de templatefilme.html com o filme selecionado como parâmetro
            window.location.href = `templatefilme.html?filme=${filmeSelecionado}`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const movieContainers = document.querySelectorAll(".movie");
    const destaqueTitle = document.getElementById("destaque-title");

    function filterMovies(category) {
        movieContainers.forEach(container => {
            const tag = container.getAttribute("data-tag");
    
            if (category === "inicio" || category === tag) {
                container.style.display = "inline-block"; // Altera para "inline-block"
            } else {
                container.style.display = "none";
            }
        });
    
        if (category === "serie") {
            destaqueTitle.textContent = "Séries em Destaque";
        } else if (category === "filme") {
            destaqueTitle.textContent = "Filmes em Destaque";
        } else {
            destaqueTitle.textContent = "Filmes/Séries em Destaque";
        }
    }
    

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
document.addEventListener("DOMContentLoaded", function() {
    var divParaMover = document.getElementById("filme1");
    var destino = document.getElementById("destino");

    if (divParaMover && destino) {
        // Mover a div de uma página para outra
        destino.appendChild(divParaMover);
    }
});





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

function openCalculator() {
    window.location.href = 'calculadora.html'
    // Neste exemplo, exibimos um alerta como mensagem.
    alert("Código secreto detectado. Abrindo a calculadora.");
}

document.addEventListener('keydown', checkKonamiCode);
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
