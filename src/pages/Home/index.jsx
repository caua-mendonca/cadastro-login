import { useState } from "react";
import "./style.css";
import Lixeira from "../../assets/lixeira.png";

function Home() {
  const [count, setCount] = useState(0);

  const users = [
    {
      id: "212was13sa",
      name: "João",
      age: 20,
      email: "joao@gmail.com",
    },
    {
      id: "212w2423s141a",
      name: "Maria",
      age: 49,
      email: "maria@gmail.com",
    },
    {
      id: "10313123wsasd",
      name: "Paulo",
      age: 34,
      email: "paulo@gmail.com",
    },
  ];

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de usuários</h1>
        <input name="nome" type="text" placeholder="Nome"/>
        <input name="idade" type="number" placeholder="Idade" />
        <input name="email" type="email" placeholder="Email"/>
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <button>
            <img src={Lixeira} alt="Lixeira" />
          </button>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Home;
