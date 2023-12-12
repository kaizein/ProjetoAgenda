// Criando um carrosel com a biblioteca slick do js
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1600, // Tempo de exibição de cada slide em milissegundos
        dots: true, // Adiciona indicadores de pontos (pontos de navegação)
        arrows: true, // Adiciona setas de navegação
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

