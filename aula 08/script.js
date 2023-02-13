function clicker()
{
    let contador = document.getElementById("clicks");
    let valor = parseInt(contador.innerHTML) + 1;
    contador.innerHTML = `${valor}`;
}

function multiply()
{
    let contador = document.getElementById("multiplicador");
    if (contador.checked)
    {
        document.getElementById("quadrado").style.backgroundColor = 'pink'
    }else{
        document.getElementById("quadrado").style.backgroundColor = 'black' 
    }
}