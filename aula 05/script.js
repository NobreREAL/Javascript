function ligar()
{
    const celular = document.getElementById('celular');

    const style = getComputedStyle(celular);

    const cor = style.backgroundColor;

    if (cor == 'rgb(0, 0, 0)'){
        celular.style.transition = "all 2s";
        celular.style.backgroundColor = 'white';
        setTimeout(logotipo, 1000);
        setTimeout(sumir, 3500);
    }
}

function logotipo()
{
    const logo = document.getElementById('logo');
    logo.style.transition = "all 2s";
    logo.style.opacity = "100%";
}

function sumir(){
    const logo = document.getElementById('logo');
    logo.style.transition = "all 3s";
    logo.style.opacity = "0%";
}
