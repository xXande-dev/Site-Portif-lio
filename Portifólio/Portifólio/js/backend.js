/* ==== transformar o menu hamburger em X ==== */
const menuHamburguer = document.querySelector(".menu-hamburguer");
menuHamburguer.addEventListener("click", () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Verifica se todos os campos foram preenchidos (validação básica)
    const nome = document.querySelector('input[placeholder="Nome Completo"]').value;
    const email = document.querySelector('input[placeholder="E-mail"]').value;
    const telefone = document.querySelector('input[placeholder="Número de telefone"]').value;
    const assunto = document.querySelector('input[placeholder="Assunto"]').value;
    const mensagem = document.querySelector('textarea[placeholder="Mensagem"]').value;

    if (nome && email && telefone && assunto && mensagem) {
        // Exibe um alerta se todos os campos estiverem preenchidos
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        // Aqui você pode enviar o formulário para um servidor ou limpar os campos
        document.getElementById('contactForm').reset(); // Limpa os campos após o envio
    } else {
        // Exibe um alerta se algum campo não estiver preenchido
        alert("Por favor, preencha todos os campos antes de enviar a mensagem.");
    }
});
