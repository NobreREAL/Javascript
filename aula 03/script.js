let produtos = ['Um', 'Dois', 'Três'];

let codigos = Array(10, 20, 30);

let meses = ['Jan', 'Fev', 'Mar'];

produtos.push("Tangerina");
codigos.push(40);
meses.push("Mai");

produtos.pop();
codigos.pop()
meses.pop();

produtos.unshift('Uva', 'Maçã')

console.log(produtos, codigos, meses);