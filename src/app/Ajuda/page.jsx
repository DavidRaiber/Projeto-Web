import Image from "next/image";
import Menu from "../components/Menu";
import "./stylesAjuda.css";

export default function Home() {
  return (
    <>
      <Menu></Menu>
      <div className="page">
        <form>
                <h1>Peça Ajuda</h1>
                <input type="text" className="textBox" placeholder="Nome"></input>
                <div>
                    <input type="text" className="textBox" placeholder="RA"></input>
                    <input type="text" className="textBox" placeholder="Telefone"></input>
                </div>
                <textarea placeholder="Digite o que deseja falar"></textarea>
                <div className="button"><p>Enviar</p></div>
            </form>
      </div>
    </>
  );
}