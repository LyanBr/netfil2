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
            searchButton.addEventListener('click', () => {
                    searchButton.classList.add('search-animation'); /* Adicionamos a classe da animação */
                    setTimeout(() => {
                        searchButton.classList.remove('search-animation'); /* Removemos a classe após a animação */
                    }, 200);
                });