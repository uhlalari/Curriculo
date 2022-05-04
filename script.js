controleMenu(document.getElementById('article_menu').children[1], document.getElementById('section_sobreMim'))

function controleMenu(botao, aparece) {
    manipularBotão(botao);
    manipularSessao(aparece);
}

function manipularBotão(botao) {
    botoes = document.getElementById('article_menu');
    for (let index = 0; index < botoes.children.length; index++) {
        botoes.children[index].style.backgroundColor = null
    }
    botao.style.backgroundColor = "green";
}

function manipularSessao(article){
    section_content = document.getElementById('section_content');
    for (let index = 0; index < section_content.children.length; index++) {
         section_content.children[index].style.display = "none";
    }
    article.style.display = "block"
}

