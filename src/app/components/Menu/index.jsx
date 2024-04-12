import Link from "next/link";
import "./menu.css";


export default function Menu(){
    return(
        <div className="menu">
            <img src="mackSymbol.png"></img>
            <div className="sp"></div>
            <div className="item"><Link href="/">Projeto </Link></div>
            <div className="item"><Link href="Ajuda">Peça ajuda</Link></div>
            <div className="item"><Link href="Perigos">Perigos</Link></div>
        </div>
    );
}