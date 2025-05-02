let currentSlide = 0;
const totalSlides = $('.slide').length;

function updateCarousel() {
    $('.carousel-slides').css('transform', `translateX(-${currentSlide * 100}%)`);
}

$('#next').click(function () {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateCarousel();
    }
});

$('#prev').click(function () {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
});

// Máscaras
$('#telefone').mask('(00) 00000-0000');
$('#cpf').mask('000.000.000-00');

// Validação simples
$('#meuFormulario').submit(function (e) {
const nome = $('#nome').val().trim();
const email = $('#email').val().trim();

if (nome === '' || email === '') {
    alert('Por favor, preencha todos os campos obrigatórios.');
    e.preventDefault();
} else {
    alert('Formulário enviado com sucesso!');
}
});