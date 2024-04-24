// Dados dos usuários
async function getUsers() {
  const users = await fetch("https://dummyapi.io/data/v1/User?created=1", {
    headers: { "app-id": "6629618736b1c4f5f11bcc1f" },
  });
  const usersData = await users.json();
  console.log(usersData.data); // .data para pegar os dados dos usuários
}
/* getUsers(); */

// Dado do usuário
async function getUser() {
  const user = await fetch("https://dummyapi.io/data/v1/user/66296e47407f744df5674a86", {
    headers: {"app-id": "6629618736b1c4f5f11bcc1f"}
  });
  const userData = await user.json();
  console.log(userData);
}
getUser();

// Criar usuário
async function createUser() {
  const userData = {
    firstName: "Fernando",
    lastName: "Gutierrez Machado",
    email: "FeRevoltes@gmail.com",
  };
  try {
    await fetch("https://dummyapi.io/data/v1/user/create", {
      method: "POST",
      headers: {
        "app-id": "6629618736b1c4f5f11bcc1f",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  } catch (erro) {
    console.log(erro);
  }
}
/* createUser() */
