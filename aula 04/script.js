function cor(newColor)
{
    const elem = document.getElementById('frase');
    elem.style.color = newColor;
}

function sleep(ms)
{
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}

function rgb()
{
    let a = 0;
    let fundo = document.getElementById('quadrado');
    let vector = ['red', 'green', 'blue']
    for (let i = 0; i < 3; i++)

    {
        fundo.style.backgroundColor = vector[a];
        setInterval((a += 1), 1000);
    }

}
