const permissoes = "aluno";

switch (permissoes) {
  case "aluno":
    console.log("Assistir aulas");
    break;
  case "Professor":
    console.log("Adicionar aulas");
    break;
  case "admin":
    console.log("Alterar o sistema");
    break;
  default:
    console.log("acesso invalido");
}
