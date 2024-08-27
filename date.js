const hoje = new Date();

const dia = hoje.getDate();
const mes = hoje.getMonth() + 1;
const ano = hoje.getFullYear();

const dataFormatada = `${dia}/${mes}/${ano}`;

alert("A data de hoje é : " + dataFormatada);