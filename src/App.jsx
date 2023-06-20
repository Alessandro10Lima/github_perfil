import { useState } from "react"
import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true);
  const [nomeUsuario, setNumeroUsuario] = useState('');

  return (
    <>
    <input className="entry" placeholder="Digite o nome de usuário" type="text" onBlur={(e) => setNumeroUsuario(e.target.value)} />

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario = {nomeUsuario}/>
      </>
    )}
    
    {/* {formularioVisivel && (
      <Formulario />
    )}
    <button type="button" onClick={() => setFormularioVisivel(!formularioVisivel)}>toggle form</button> */}
    </>
  )
}

export default App
