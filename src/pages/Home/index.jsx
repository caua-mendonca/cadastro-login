import { useEffect, useState, useRef } from "react";
import "./style.css";
import Lixeira from "../../assets/lixeira.png";
import api from "../../services/api";

function Home() {

  const [users, setUsers] = useState([]);

  const InputName = useRef();
  const InputAge = useRef();
  const InputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios")

    setUsers(usersFromApi.data)
    console.log(users)
  }

   async function CreateUsers() {
      await api.post("/usuarios", {
        name: InputName.current.value,
        age: InputAge.current.value,
        email: InputEmail.current.value
      })

      getUsers()
  }

   async function DeleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    getUsers()
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de usuários</h1>
        <input name="nome" type="text" placeholder="Nome" ref={InputName}/>
        <input name="idade" type="number" placeholder="Idade" ref={InputAge}/>
        <input name="email" type="email" placeholder="Email" ref={InputEmail}/>
        <button type="button" onClick={CreateUsers}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <button onClick={() => DeleteUsers(user.id)} >
            <img src={Lixeira} alt="Lixeira" />
          </button>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Home;
