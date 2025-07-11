document.querySelector('#abrir').onclick = function(){
    document.documentElement.classList.add('menu-aberto');
};
document.querySelector('#fechar').onclick = function(){
    document.documentElement.classList.remove('menu-aberto');
};
