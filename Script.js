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
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        const nome = contactForm.querySelector("#nome").value;
        const email = contactForm.querySelector("#email").value;
        const mensagem = contactForm.querySelector("#mensagem").value;       
        if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {

             alert("Por favor, preencha todos os campos do formulário.");
        
        } else {
                // Aqui você pode enviar os dados para o servidor ou fazer qualquer ação necessária.
                // Por exemplo, usando a função fetch() para fazer uma solicitação de envio.
                // Substitua esta parte pelo código de envio real.
                alert("Formulário enviado com sucesso!");
                contactForm.reset(); // Limpa o formulário após o envio
            }
    });
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
document.getElementById('calc-button').addEventListener('click', function() {
    // Redirecionar o usuário para outra página
    window.location.href = 'calculadora.html';
});

