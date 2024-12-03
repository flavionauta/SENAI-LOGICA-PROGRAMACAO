for (let numero = 1; numero <= 10; numero++) {
	console.log(numero);
}

listaDeEstudantes.push("José");
console.log(listaDeEstudantes);
let listaDeEstudantes = ["Helena", "Chico", "Mário", "José", "Maria"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if (quantidadeDeEstudantes < 5) {
	listaDeEstudantes.push("João");
	console.log(listaDeEstudantes);
} else {
	console.log("Não é possível inserir mais alunos nessa turma");