$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });
    

    // smoot scrolling

    $('a[href*="#"]').on('click', function(e){
        
        e.preventDefault();

        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );

        
    });
});


function showProjects(category) {
    // Esconde todas as caixas de projeto
    document.querySelectorAll('.projects-box').forEach(box => {
        box.style.display = 'none';
    });

    // Mostra a caixa correspondente à categoria selecionada
    document.getElementById(category).style.display = 'block';
}

// Inicialmente exibe a caixa de projetos iniciantes
document.addEventListener('DOMContentLoaded', () => {
    showProjects('beginner');
});

function showProjects(level, element) {
    // Esconde todas as caixas de projetos
    var boxes = document.querySelectorAll('.projects-box');
    boxes.forEach(function(box) {
        box.style.display = 'none';
    });

    // Mostra a caixa de projeto correspondente
    var selectedBox = document.getElementById(level);
    if (selectedBox) {
        selectedBox.style.display = 'block';
    }

    // Remove a classe 'active' de todos os botões
    var buttons = document.querySelectorAll('.menu-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Adiciona a classe 'active' ao botão clicado
    if (element) {
        element.classList.add('active');
    }
}
