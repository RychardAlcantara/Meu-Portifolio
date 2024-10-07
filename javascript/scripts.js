const myObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Seleciona todos os elementos com a classe 'hidden'
const elements = document.querySelectorAll('.hidden');

// Observa cada elemento para detectar a interseção
elements.forEach(element => myObserver.observe(element));

// Função para rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Obtém o ID da seção de destino
        const targetElement = document.querySelector(targetId); // Seleciona a seção de destino

        // Rola suavemente até a seção de destino
        targetElement.scrollIntoView({
            behavior: 'smooth' // Define o comportamento de rolagem como suave
        });
    });
});

document.getElementById("menu-button").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex"; // Exibir o menu
    } else {
        menu.style.display = "none"; // Ocultar o menu
    }
});