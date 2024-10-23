import React from "react";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "./AppStyle.scss";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
body {
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
  background-repeat: no-repeat;
  background-size: 100%;

   @media(max-width: 834px){
    background-image: url("https://github.com/silvavit0ria/projeto-vnw-genio-da-lampada/blob/main/palacio-mobile.png?raw=true");
   }
  }
`;

const Titulo = styled.h1`
  color: #EFBC2F;
  text-align: center;
  font-family: "Mouse Memoirs", sans-serif;
   font-weight: 100;
   font-size: 3rem;
`;

export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <GlobalStyle />
      <Titulo className="titulo">Liberte a magia da programação com a lâmpada de Aladim.</Titulo>

    <div> <img src={
        lampada  
        ? "https://github.com/silvavit0ria/projeto-vnw-genio-da-lampada/blob/main/lampada-com-mago-.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
      } alt="Lampada" 
      /> 
      </div> 
  <button onClick={trocarLampada}>Clique Aqui</button>
    </main>
  );
}