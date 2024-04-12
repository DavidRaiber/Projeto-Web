import Image from "next/image";
import Menu from "./components/Menu";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Menu></Menu>
      <div class="page">
      <div class="frame">
            <img src="nod.jpg"></img>
        </div>
        <div class="frame">
            <p>O projeto MackAntiVicio foi criado visando ajudar estudantes do mackenzie que podem possuir algum problema de dependência em substâncias ou álcool.<br></br><br></br>Aqui você poderá se conscientizar dos perigos dessas substancias e terá um lugar para pedir ajudar para combater essa doença.<br></br><br></br> Aqui você pode encontrar uma seção para pedir ajuda caso você se encontre em uma situação de risco às substâncias, podendo se abrir anonimamente para profissionais da saúde. <br></br><br></br>Também podemos encontrar uma seção para aprender sobre as substancias e como elas podem ser agravantes para nossa saúde</p>
        </div>
      </div>
    </>
  );
}
