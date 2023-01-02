var loginLink = "index.html"
var homeLink = "index.html"
var produtosLink = "#"
var eventosLink = "#"
var marketingLink = "#"
var secretariaLink = "#"
var tesourariaLink = "#"
var presidenciaLink = "presidencia.html"
var galeriaLink = "galeria.html"
var intermedLink = "intermed.html"
var parceriasLink = "parceiros.html"
var bateriaLink = "bateria.html"
var contatoLink = "contato.html"

/*ADICIONE OS LINKS EM ORDEM EM QUE APARECEM OS ELEMENTOS A*/
var arrayDeLinks = [loginLink, homeLink, produtosLink, eventosLink,
    marketingLink, secretariaLink, tesourariaLink, presidenciaLink, galeriaLink,
    intermedLink, parceriasLink, bateriaLink, contatoLink];

/*ESSE CODIGO ADICIONA OS ELEMENTOS DO NAV*/

var navBoxReferencia = document.getElementsByClassName("nav-box-menu")[0];
navBoxReferencia.innerHTML = [
    "<ul class=\"menu-list\">" +
    "<div class=\"nav-box-menuLogin-cell\">" +
    "<div class=\"foto-de-usuario\">" +
    "<img src=\"icons/Male User_128px.png\">" +
    "</div>" +
    "<div class=\"nome-de-usuario\">" +
    "<a><p>Entrar</p></a>" +
    "</div>" +
    "</div>" +
    "<a class=\"home-link\">" +
    "<li class=\"\"><img class=\"navIcons\" >Página Inicial</li>" +
    "</a>" +
    "<li class=\"li-diretorias\"><img class=\"navIcons\">Diretorias" +
    "<ul class=\"menu-list-diretorias\">" +
    "<a class=\"produtos-link\">" +
    "<li class=\"\"><img class=\"navIcons\" >Produtos</li>" +
    "</a>" +
    "<a class=\"eventos-link\">" +
    "<li class=\"\"><img class=\"navIcons\" >Eventos</li>" +
    "</a>" +
    "<a class=\"marketing-link\">" +
    "<li class=\"\"><img class=\"navIcons\" >Marketing</li>" +
    "</a>" +
    "<a class=\"secretaria-link\">" +
    "<li class=\"\"><img class=\"navIcons\">Secretaria</li>" +
    " </a>" +
    "<a class=\"tesouraria-link\">" +
    "<li class=\"\"><img class=\"navIcons\" >Tesouraria</li>" +
    "</a>" +
    "<a class=\"presidencia-link\">" +
    "<li class=\"\"><img class=\"navIcons\" >Presidência</li>" +
    "</a>" +
    "</ul>" +
    "</li>" +
    "<a class=\"galeria-link\">" +
    "<li class=\"\"><img class=\"navIcons\" >Galeria</li>" +
    "</a>" +
    "<a class=\"intermed-link\">" +
    "<li class=\"\"><img class=\"navIcons\" >Intermed</li>" +
    "</a>" +
    "<a class=\"parcerias-link\">" +
    "<li class=\"\"><img class=\"navIcons\" >Parceiros</li>" +
    "</a>" +
    "<a class=\"bateria-link\">" +
    "<li class=\"\"><img class=\"navIcons\" >Bateria Pintada</li>" +
    "</a>" +
    "<a class=\"contato-link\">" +
    "<li class=\"\"><img class=\"navIcons\" >Contato</li>" +
    "</a>" +
    "</ul>"
];

var listaDeMenus = document.querySelectorAll(".menu-list a");
for (i = 0; i < listaDeMenus.length; i++) {
    listaDeMenus[i].setAttribute("href", arrayDeLinks[i]);
}

$('.menu-list a').each(function () {
    if ($(this).attr('href') == location.href.split("/").slice(-1)) { $(this).addClass('atual'); }
    if (location.href.split("/").slice(-1) == "") { if ($(this).attr('href') == "index.html") { $(this).addClass('atual'); } }
});


/*ESSE CODIGO ACIONA O BOTAO INVISIVEL PRA CELULAR*/
var navMenuSelect = document.getElementById("menu-buttom");
var menuVisible = document.getElementsByClassName("nav-box-menu")[0];
navMenuSelect.addEventListener('change', function () {
    if (this.checked) {
        document.getElementsByClassName("nav-box-menu")[0].style.visibility = "visible";
    } else {
        document.getElementsByClassName("nav-box-menu")[0].style.visibility = "hidden";
    }
});
var navTamanho = document.getElementsByClassName("box-menu-buttom")[0].offsetHeight;
menuVisible.style.top = navTamanho + "px";


/*ESSE CODIGO ADICIONA O UL INTERNO*/
var menuDiretorias = document.getElementsByClassName("menu-list-diretorias")[0];
if ($(window).width() > 800) {
    menuDiretorias.style.left = document.getElementsByClassName("li-diretorias")[0].offsetWidth + "px";
}
else {
    $(".li-diretorias").on("click", function () {
        menuDiretorias.style.height = "auto";
        menuDiretorias.style.display = "initial";

    });
}